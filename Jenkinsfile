pipeline {
    agent {
        dockerfile {
            args '-u root:root'
            filename 'docker/Dockerfile'
            reuseNode false
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
                                choices: "major\nminor\npatch",
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
                expression { env.RELEASE_TYPE == 'major' | env.RELEASE_TYPE == 'minor' | env.RELEASE_TYPE == 'patch' | env.RELEASE_TYPE == 'beta' | env.RELEASE_TYPE == 'rc' } 
            }
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId:"diaas-rw", passwordVariable:"ARTIF_PASSWORD", usernameVariable:"ARTIF_USER")]) {
                        env.PASSWORD = input message: 'Enter password to continue', ok: 'Continue',
                            parameters: [string(defaultValue: '', description: 'Password required', name: 'password')]
                        if (env.PASSWORD == ARTIF_PASSWORD) {
                            env.RELEASE_VALID = 'valid';
                            sh "echo 'SIIIIII'"
                        } else {
                            env.RELEASE_VALID = 'invalid';
                            sh "echo 'NOOOOO'"
                        }
                    }
                }
            }
        }
        stage('Install dependencies') {
            when {
                expression { env.RELEASE_VALID == 'valid' | env.RELEASE_TYPE == 'no-release' } 
            }
            steps {
                sh '''
                    npm install
                '''
            }
        }
        stage('Build dxc-ngx-cdk library') {
            when {
                expression { env.RELEASE_VALID == 'valid' | env.RELEASE_TYPE == 'no-release' } 
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
                expression { env.RELEASE_VALID == 'valid' | env.RELEASE_TYPE == 'no-release' } 
            }
            steps {
                sh '''
                    npm run build-storybook
                '''
            }
        }
        stage('Test library') {
            when {
                expression { env.RELEASE_VALID == 'valid' | env.RELEASE_TYPE == 'no-release' } 
            }
            steps {
                sh '''
                    echo 'Add the f***ing tests!!'
                '''
            }
        }
        stage('.npmrc') {
            when {
                expression { env.RELEASE_VALID == 'valid' | env.RELEASE_TYPE == 'no-release' } 
            }
            steps {
                withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
                    sh '''
                        cat ${CONFIG} > ~/.npmrc
                    '''
                }
            }
        }
        stage('Publish dxc-ngx-cdk alpha version to Artifactory ') {
            when { branch 'master' }
            steps {
                // Publish library to npm repository
                sh "sed -i -e 's/0.0.0/'0.0.0-alpha.${BUILD_ID}'/g' ./projects/dxc-ngx-cdk/package.json"
                sh '''
                    cp ./projects/dxc-ngx-cdk/package.json ./projects/dxc-ngx-cdk/src/lib/package.json
                    cp ./.npmignore ./projects/dxc-ngx-cdk/src/lib/.npmignore
                    cd ./projects/dxc-ngx-cdk/src/lib
                    npm config set @diaas:registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                    npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm --tag alpha
                '''
            }
        }
        stage('Deploy storybook to dev and publish to Artifactory') {
            when { branch 'master' }
            steps {
                // Deploying storybook to dev-diaas-angular-storybook environment
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'DIAAS-AWS-CLI',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                    withAWS(role:"arn:aws:iam::665158502186:role/ISS_DIAAS_PowerUser"){
                        sh '''
                            aws s3 rm s3://dev-diaas-angular-storybook/ --recursive
                            aws s3 cp ./storybook-static/ s3://dev-diaas-angular-storybook/ --recursive
                        '''
                    }
                }
                // Zipping storybook
                sh '''
                    rm -rf storybook.zip
                '''
                zip zipFile: 'storybook.zip', archive: false, dir: './storybook-static'
                // Uploading storybook to Artifactory (diaas-generic)
                withCredentials([usernamePassword(credentialsId:"diaas-rw", passwordVariable:"ARTIF_PASSWORD", usernameVariable:"ARTIF_USER")]) {
                  sh '''
                        curl -u${ARTIF_USER}:${ARTIF_PASSWORD} -T ./storybook.zip "https://artifactory.csc.com/artifactory/diaas-generic/dxc-ngx-cdk/storybook/storybook-bundle.${BRANCH_NAME}.${BUILD_ID}.zip"
                  '''
                }
            }
        }
        stage('Create git tag and relese notes') {
            when {
                expression { env.RELEASE_VALID == 'valid' } 
            }
            steps {
                script {
                    if (${BUILD_ID} === 1) {
                        sh "git checkout -b ${GIT_BRANCH}"
                        sh "git push --set-upstream origin ${GIT_BRANCH}"
                    } else {
                        sh "git checkout ${GIT_BRANCH}"
                    }
                    if (env.RELEASE_TYPE == 'major') {
                        sh "release major"
                    } else if (env.RELEASE_TYPE == 'minor') {
                        sh "release minor"
                    } else if (env.RELEASE_TYPE == 'patch') {
                        sh "release patch"
                    } else if (env.RELEASE_TYPE == 'beta') {
                        sh "release pre beta"
                    } else if (env.RELEASE_TYPE == 'rc') {
                        sh "release pre rc"
                    }
                }
            }
        }
        stage('Publish dxc-ngx-cdk version to Artifactory ') {
            when {
                expression { env.RELEASE_VALID == 'valid' } 
            }
            steps {
                // Publish library to npm repository
                sh '''
                    cp ./projects/dxc-ngx-cdk/package.json ./projects/dxc-ngx-cdk/src/lib/package.json
                    cp ./.npmignore ./projects/dxc-ngx-cdk/src/lib/.npmignore
                    cd ./projects/dxc-ngx-cdk/src/lib
                    npm config set @diaas:registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                    npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm --tag ${env.RELEASE_TYPE}
                '''
            }
        }
        stage('Deploy storybook to demo and publish to Artifactory') {
            when {
                expression { env.RELEASE_VALID == 'valid' } 
            }
            steps {
                // Deploying storybook to dev-diaas-angular-storybook environment
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'DIAAS-AWS-CLI',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                    withAWS(role:"arn:aws:iam::665158502186:role/ISS_DIAAS_PowerUser"){
                        sh '''
                            aws s3 rm s3://diaas-angular-storybook/ --recursive
                            aws s3 cp ./storybook-static/ s3://diaas-angular-storybook/ --recursive
                        '''
                    }
                }
                // Zipping storybook
                sh '''
                    rm -rf storybook-static.zip
                '''
                zip zipFile: 'storybook.zip', archive: false, dir: './storybook-static'
                // Uploading storybook to Artifactory (diaas-generic)
                withCredentials([usernamePassword(credentialsId:"diaas-rw", passwordVariable:"ARTIF_PASSWORD", usernameVariable:"ARTIF_USER")]) {
                  sh '''
                        curl -u${ARTIF_USER}:${ARTIF_PASSWORD} -T ./storybook.zip "https://artifactory.csc.com/artifactory/diaas-generic/dxc-ngx-cdk/storybook/storybook-bundle.${BRANCH_NAME}.${BUILD_ID}.zip"
                  '''
                }
            }
        }
    }
}
