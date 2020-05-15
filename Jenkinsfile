def releasedVerion

pipeline {

    agent any

    environment  {
        REPO_NAME = 'diaas-angular-cdk'
        SERVICE_NAME='dxc-ngx-cdk'
    }
    stages {
        // stage('Execute cypress tests') {
        //     steps {
        //         script{
        //             // this image provides everything needed to run Cypress
        //             docker.image('cypress/base:10').inside('-v $WORKSPACE:/workDir -w /workDir') {
        //                 withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
        //                     sh "touch ~/.npmrc"
        //                     sh "echo '//registry.npmjs.org/:always-auth=false' >> ~/.npmrc"
        //                     sh '''
        //                         cat ${CONFIG} >> ~/.npmrc
        //                     '''
        //                     sh '''
        //                         cat ~/.npmrc
        //                     '''
        //                 }
        //                 sh 'npm install'
        //                 sh 'npm ci'
        //                 sh 'npm run cypress:ci'
        //             }
        //         }
        //     }
        // }




        stage('Build and Deploy') {
           agent {
                dockerfile {
                    filename 'docker/Dockerfile'
                    reuseNode true
                }
           }
           stages {

            stage('Git') {
              steps {
                withCredentials([usernamePassword(credentialsId:"pdxc-jenkins", passwordVariable:"GIT_PASSWORD", usernameVariable:"GIT_USER")]) {
                  sh "touch ~/.netrc"
                  sh "echo 'machine github.dxc.com' >> ~/.netrc"
                  sh "echo 'login ${GIT_USER}' >> ~/.netrc"
                  sh "echo 'password ${GIT_PASSWORD}' >> ~/.netrc"
                  sh "git config --global user.email 'jenkins@dxc.com'"
                  sh "git config --global user.name 'Jenkins User'"
                }
              }
            }
            stage('Check repo name') {
                steps{
                    script{
                        withCredentials([usernamePassword(credentialsId:"pdxc-jenkins", passwordVariable:"GIT_PASSWORD", usernameVariable:"GIT_USER")]) {
                            env.GIT_REPO_NAME = env.GIT_URL.replaceFirst(/^.*\/([^\/]+?).git$/, '$1')

                            def check=checkRepoName(env.GIT_REPO_NAME,"${REPO_NAME}");
                            if (!check){
                                error "This pipeline stops here! Please check the environment variables"
                            }
                        }
                    }
                }
            }
            stage('Release number') {
                steps {
                        script {
                            env.OLD_RELEASE_NUMBER = sh (
                                script: "grep 'version' projects/dxc-ngx-cdk/package.json | grep -o '[0-9.].*[^\",]'",
                                returnStdout: true
                            ).trim()
                        }
                }
            }
            stage('Release type') {
                when {
                    expression { BRANCH_NAME ==~ /^.*\b(release)\b.*$/ }
                }
                steps {
                    script {
                        try {
                            timeout(time: 10, unit: 'MINUTES') {
                                env.RELEASE_OPTION = input message: 'Select a release option', ok: 'Continue',
                                    parameters: [
                                        choice(
                                            name: 'type',
                                            choices: "major\nminor\npatch\npremajor\npreminor\nprepatch\nprerelease\nno-release",
                                            description: "Version to bump from: ${OLD_RELEASE_NUMBER}. If release is selected, a new release will be released. When you select release option, a tag is created in GitHub with that version, the release is pointed to that tag and release notes will be added. Also is important to note that the created package for the release is going to be uploaded to Artifactory. To continue without releasing, select no-release. After 10 minutes, if you don`t select any choice the default selected option will be `no-release`"
                                        )
                                    ]
                            }
                        } catch(err) {
                            env.RELEASE_OPTION = 'no-release'
                        }
                    }
                }
            }
            stage('Password to continue') {
                when {
                    expression { env.RELEASE_OPTION == 'major' | env.RELEASE_OPTION == 'minor' | env.RELEASE_OPTION == 'patch' | env.RELEASE_OPTION == 'premajor' | env.RELEASE_OPTION == 'preminor' | env.RELEASE_OPTION == 'prepatch' |env.RELEASE_OPTION == 'prerelease' }
                }
                steps {
                    script {
                        withCredentials([usernamePassword(credentialsId:"diaas-rw", passwordVariable:"ARTIF_PASSWORD", usernameVariable:"ARTIF_USER")]) {
                             env.RELEASE_VALID = 'valid';
                        }
                    }
                }
            }
            stage('Release versioning') {
                when {
                    expression { env.RELEASE_VALID == 'valid' }
                }
                steps {
                    script {
                        if (env.RELEASE_OPTION == 'premajor' | env.RELEASE_OPTION == 'preminor' | env.RELEASE_OPTION == 'prepatch' | env.RELEASE_OPTION == 'prerelease') {
                            env.RELEASE_TYPE = input message: 'Select a pre-release type', ok: 'Continue',
                            parameters: [
                                choice(
                                    name: 'type',
                                    choices: "beta\nrc",
                                    description: 'BETA when the version could have some errors. RC if the version is completely ready to release.'
                                )
                            ]
                        }
                    }
                }
            }
            stage('Build and Install lib dependencies'){
                steps {
                    sh '''
                        cd ./projects/dxc-ngx-cdk && rm -rf node_modules
                        npm install
                        pwd && ls -la && npm run generate-lib
                    '''
                }
            }
            stage('Install dependencies'){
                steps {
                    sh '''
                        cd .
                        npm install
                    '''
                }
            }
            stage('.npmrc') {
                when {
                    expression { env.RELEASE_VALID == 'valid' | env.BRANCH_NAME == 'master' }
                }
                steps {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
                        sh '''
                            cat ${CONFIG} > ~/.npmrc
                            npm config set @diaas:registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm-local/
                        '''
                    }
                }
            }
            stage('Publish dxc-ngx-cdk alpha version to Artifactory ') {
                when { branch 'master' }
                steps {
                    // Publish library to npm repository
                    script{
                      sh "sed -i -e 's/${OLD_RELEASE_NUMBER}/'${OLD_RELEASE_NUMBER}-alpha.${BUILD_ID}'/g' ./dist/dxc-ngx-cdk/package.json"
                      releasedVerion = sh(returnStdout: true, script: """
                        cd ./dist/dxc-ngx-cdk
                        npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm-local/ --tag alpha
                        """).trim()
                    }


                }
            }
            stage('Tagging version') {
                when {
                    expression { env.RELEASE_VALID == 'valid' }
                }
                steps {
                    script {
                        if (env.BUILD_ID == 1) {
                            sh "git checkout -b ${GIT_BRANCH}"
                        } else {
                            sh "git checkout ${GIT_BRANCH}"
                            sh "git reset --hard origin/${GIT_BRANCH}"
                            sh "git tag | xargs git tag -d"
                        }
                        sh "git pull origin ${GIT_BRANCH}"
                        if (env.RELEASE_OPTION == 'major') {
                            sh "npm version major"
                        } else if (env.RELEASE_OPTION == 'minor') {
                            sh "npm version minor"
                        } else if (env.RELEASE_OPTION == 'patch') {
                            sh "npm version patch"
                        } else if (env.RELEASE_OPTION == 'premajor') {
                            sh "npm version premajor --preid=${RELEASE_TYPE}"
                        } else if (env.RELEASE_OPTION == 'preminor') {
                            sh "npm version preminor --preid=${RELEASE_TYPE}"
                        } else if (env.RELEASE_OPTION == 'prepatch') {
                            sh "npm version prepatch --preid=${RELEASE_TYPE}"
                        } else if (env.RELEASE_OPTION == 'prerelease') {
                            sh "npm version prerelease --preid=${RELEASE_TYPE}"
                        }
                        env.RELEASE_NUMBER = sh (
                                script: "grep 'version' package.json | grep -o '[0-9.].*[^\",]'",
                                returnStdout: true
                            ).trim()
                        sh "sed -i -e 's/${OLD_RELEASE_NUMBER}/'${RELEASE_NUMBER}'/g' dist/dxc-ngx-cdk/package.json"
                        sh "sed -i -e 's/${OLD_RELEASE_NUMBER}/'${RELEASE_NUMBER}'/g' projects/dxc-ngx-cdk/package.json"
                        sh "git push --tags"
                    }
                }
            }
            stage('Generating release notes') {
                when {
                    expression { env.RELEASE_VALID == 'valid' }
                }
                steps {
                    script {
                        try {
                            sh "github_changelog_generator --github-site='https://github.dxc.com' --github-api='https://github.dxc.com/api/v3/' --token d53a75471da39b66fafb25dfcc9613c069de337e"
                            sh "cat CHANGELOG.md"
                            sh "git add CHANGELOG.md projects/dxc-ngx-cdk/package.json package.json"
                            sh "git commit -m 'New release: ${RELEASE_NUMBER}'"
                            sh "git push origin ${GIT_BRANCH}"
                            sh "showdown makehtml -i CHANGELOG.md -o CHANGELOG.html"
                            sh "gren release --api-url=https://github.dxc.com/api/v3 --token=d53a75471da39b66fafb25dfcc9613c069de337e --override"
                        } catch(err) {
                            sh "echo 'GREN Release Notes failed!'"
                        }
                    }
                }
            }
            stage('Publish dxc-ngx-cdk version to Artifactory ') {
                when {
                    expression { env.RELEASE_VALID == 'valid' }
                }
                steps {
                    script {
                        // Publish library to npm repository
                        try {
                            env.RELEASE_TYPE = sh (
                                script: "grep 'version' package.json | grep -o '[0-9.].*[^\",]' | grep -o '[a-z].*[^.0-9]'",
                                returnStdout: true
                            ).trim()
                        } catch(err) {
                            env.RELEASE_TYPE = ''
                        }

                        if (env.RELEASE_TYPE == 'beta' | env.RELEASE_TYPE == 'rc') {
                            sh '''
                                cd ./dist/dxc-ngx-cdk
                                npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm --tag ${RELEASE_TYPE}
                            '''
                        } else {
                            sh '''
                                cd ./dist/dxc-ngx-cdk
                                npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                            '''
                        }

                    }
                }
            }
           }
        }
    }
    post {
        always {
            script {
                env.GIT_USER = sh (
                    script: 'git --no-pager show -s --format=\'%ae\'',
                    returnStdout: true
                ).trim()

                def mailmessage = ''
                def subjectmessage = ''
                if (currentBuild.currentResult != 'SUCCESS'  ) {
                  mailmessage = 'The pipeline failed! Please fix this error ASAP :) '
                  subjectmessage = 'The pipeline failed! Your changes are breaking the project, please fix this error ASAP :). SOIS ESCORIA.'
                }else{
                    if (BRANCH_NAME ==~ /^.*\b(release)\b.*$/ && env.RELEASE_VALID == 'valid') {
                      mailmessage = "New DXC Angular CDK Release! Check out the new changes in this version: ${env.RELEASE_NUMBER} :)"
                    } else if (GIT_USER != 'jenkins@dxc.com') {
                      mailmessage = "Commit: ${GIT_COMMIT}\n Url: ${GIT_URL}\n Branch: ${GIT_BRANCH}"
                  }
                  subjectmessage = "Your changes passed succesfully all the stages, you are a really good developers! YES, YOU ARE :) ${releasedVerion}"
                }
                emailext subject: "${subjectmessage}", body: "Commit: ${GIT_COMMIT}\n Url: ${GIT_URL}\n Branch: ${GIT_BRANCH} <br/> ${mailmessage}", to: "mgarcia232@dxc.com,vrodriguezgu@dxc.com",from: 'no-reply@platformdxc-mg.com'
                sh "cd /"
                deleteDir()
                }
            }
        }
}
Boolean checkRepoName(repoName, hardcodeRepoName){
    if (hardcodeRepoName == repoName){
        return true
    }
    return false
}
