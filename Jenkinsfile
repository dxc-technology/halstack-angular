pipeline {
    agent {
        dockerfile {
            args '-u root:root'
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
                    }
            }
        }
        stage('Release type') {
            when {
                expression { BRANCH_NAME ==~ /^.*\b(release)\b.*$/ } 
            }
            steps {
                script {
                    env.RELEASE_OPTION = input message: 'Select a release option', ok: 'Continue',
                        parameters: [
                            choice(
                                name: 'type',
                                choices: "Release\nPre-release\nNo-release",
                                description: 'If release is selected, a new release will be released. If pre-release is selected, a new pre-release will be released. To continue without releasing, select No-release.' 
                            )
                        ]
                }
            }
        }
        stage('Release versioning') {
            steps {
                script {
                    if (env.RELEASE_OPTION == 'Release') {
                        sh '''
                            echo 'Releaseeeee!'
                        '''
                        env.RELEASE_TYPE = input message: 'Select a release type', ok: 'Continue',
                        parameters: [
                            choice(
                                name: 'type',
                                choices: "Major\nMinor\nPatch",
                                description: 'MAJOR version when you make incompatible API changes. MINOR version when you add functionality in a backwards-compatible manner. PATCH version when you make backwards-compatible bug fixes.' 
                            )
                        ]
                    } else if (env.RELEASE_OPTION == 'Pre-release') {
                        sh '''
                            echo 'Pre-Releaseeeee!'
                        '''
                        env.RELEASE_TYPE = input message: 'Select a pre-release type', ok: 'Continue',
                        parameters: [
                            choice(
                                name: 'type',
                                choices: "beta\nrc",
                                description: 'BETA when the version could have some errors. RC if the version is completely ready to release.' 
                            )
                        ]
                    } else {
                        sh '''
                            echo 'No-Releaseeeee!'
                        '''
                        env.RELEASE_TYPE = 'no-release'
                    }
                }
            }
        }
        stage('Password to continue') {
            when {
                expression { env.RELEASE_TYPE == 'Major' | env.RELEASE_TYPE == 'Minor' | env.RELEASE_TYPE == 'Patch' | env.RELEASE_TYPE == 'beta' | env.RELEASE_TYPE == 'rc' } 
            }
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId:"diaas-rw", passwordVariable:"ARTIF_PASSWORD", usernameVariable:"ARTIF_USER")]) {
                        env.PASSWORD = input message: 'Enter password to continue', ok: 'Continue',
                            parameters: [string(defaultValue: '', description: 'Password required', name: 'password')]
                    }
                    if (env.PASSWORD == ${ARTIF_PASSWORD}) {
                        env.RELEASE_VALID = true;
                    } else {
                        env.RELEASE_VALID = false;
                    }
                }
            }
        }
        stage('Install dependencies') {
            when {
                expression { env.RELEASE_VALID == true |  env.RELEASE_TYPE == 'no-release' } 
            }
            steps {
                sh '''
                    npm install
                '''
            }
        }
        stage('Build dxc-ngx-cdk library') {
            when {
                expression { env.RELEASE_VALID == true |  env.RELEASE_TYPE == 'no-release' } 
            }
            steps {
                sh '''
                    ng build dxc-ngx-cdk
                    cp -R ./projects/dxc-ngx-cdk/src/lib/styles ./dist/dxc-ngx-cdk/styles
                '''
            }
        }
        stage('Build dxc-ngx-cdk storybook') {
            when {
                expression { env.RELEASE_VALID == true |  env.RELEASE_TYPE == 'no-release' } 
            }
            steps {
                sh '''
                    npm run build-storybook
                '''
            }
        }
        stage('Test library') {
            when {
                expression { env.RELEASE_VALID == true |  env.RELEASE_TYPE == 'no-release' } 
            }
            steps {
                sh '''
                    echo 'Add the f***ing tests!!'
                '''
            }
        }
        stage('.npmrc') {
            when {
                expression { env.RELEASE_VALID == true |  env.RELEASE_TYPE == 'no-release' } 
            }
            steps {
                withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
                    sh '''
                        cat ${CONFIG} > ~/.npmrc
                    '''
                }
            }
        }
        // stage('Push dxc-ngx-cdk library artifact to master') {
        //     when { branch 'master' }
        //     steps {
        //         script {
        //             def doPromote=true;
        //             try {
        //                 timeout(time: 10, unit: 'MINUTES') {
        //                         env.RELEASE_NUMBER = input message: 'Do you want to publish this new package?', ok: 'Release!',
        //                             parameters: [string(defaultValue: env.PACKAGE_VERSION, description: 'package version', name: 'version')]
        //                 }
        //             } catch(err) {
        //                 doPromote=false;
        //             }
        //             if(doPromote){
        //                 isStable=false;
        //                 try {
        //                     timeout(time: 2, unit: 'MINUTES') {
        //                         input (message: 'Do you want to tag this package as stable?', ok: 'Yes')
        //                     }
        //                     isStable=true;
        //                 } catch(err) {
        //                     echo "This build was published to NPM but not tagged as stable"
        //                 }

        //                 // ADD HERE NEW VERSION ON PACKAGE.JSON
        //                 sh "sed -i -e 's/0.0.0/'${env.RELEASE_NUMBER}'/g' ./dist/dxc-ngx-cdk/package.json"
        //                 sh "cat package.json"

        //                 // TAG IF IS STABLE
        //                 if (isStable) {
        //                     currentBuild.description = "published: ${env.RELEASE_NUMBER} (stable tag:${isStable})"
        //                     echo "Create Git tag ${env.RELEASE_NUMBER}"
        //                     sh '''
        //                         gitUrlWithCreds="$(echo "${GIT_URL}" | sed -e 's!://!://'${GIT_USER}:${GIT_PASSWORD}'@!')"
        //                         git tag "${RELEASE_NUMBER}" "${GIT_COMMIT}"
        //                         git push "${gitUrlWithCreds}" "${RELEASE_NUMBER}"
        //                     '''
        //                 }
        //             }
        //             sh '''
        //                 cd dist/dxc-ngx-cdk
        //                 cp ../../projects/dxc-ngx-cdk/package.json ../../projects/dxc-ngx-cdk/src/lib/package.json
        //                 cp ../../.npmignore ../../projects/dxc-ngx-cdk/src/lib/.npmignore
        //                 npm config set @diaas:registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
        //                 npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
        //             '''
        //         }
        //     }
        // }
    }
}
