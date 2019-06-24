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
        stage('.npmrc') {
            steps {
                withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
                    sh '''
                        cat ${CONFIG} > ~/.npmrc
                    '''
                }
            }
        }

        stage('Install dependencies') {
            steps {
                sh '''
                    npm install
                '''
            }
        }
        stage('Deploy Storybook and Artifact'){
            parallel{
                stage('Deploy Artifact'){
                    stages{
                        stage('Build dxc-ngx-cdk library') {
                            steps {
                                sh '''
                                    ng build dxc-ngx-cdk
                                    cp -R ./projects/dxc-ngx-cdk/src/lib/styles ./dist/dxc-ngx-cdk/styles
                                '''
                            }
                        }
                        stage('Push dxc-ngx-cdk library artifact to master') {
                            when { branch 'master' }
                            steps {
                                script {
                                    def doPromote=true;
                                    try {
                                        timeout(time: 10, unit: 'MINUTES') {
                                                env.RELEASE_NUMBER = input message: 'Do you want to publish this new package?', ok: 'Release!',
                                                    parameters: [string(defaultValue: env.PACKAGE_VERSION, description: 'package version', name: 'version')]
                                        }
                                    } catch(err) {
                                        doPromote=false;
                                    }
                                    if(doPromote){
                                        isStable=false;
                                        try {
                                            timeout(time: 2, unit: 'MINUTES') {
                                                input (message: 'Do you want to tag this package as stable?', ok: 'Yes')
                                            }
                                            isStable=true;
                                        } catch(err) {
                                            echo "This build was published to NPM but not tagged as stable"
                                        }

                                        // ADD HERE NEW VERSION ON PACKAGE.JSON
                                        sh "sed -i -e 's/0.0.0/'${env.RELEASE_NUMBER}'/g' ./dist/dxc-ngx-cdk/package.json"
                                        sh "cat package.json"

                                        // TAG IF IS STABLE
                                        if (isStable) {
                                            currentBuild.description = "published: ${env.RELEASE_NUMBER} (stable tag:${isStable})"
                                            echo "Create Git tag ${env.RELEASE_NUMBER}"
                                            sh '''
                                                gitUrlWithCreds="$(echo "${GIT_URL}" | sed -e 's!://!://'${GIT_USER}:${GIT_PASSWORD}'@!')"
                                                git tag "${RELEASE_NUMBER}" "${GIT_COMMIT}"
                                                git push "${gitUrlWithCreds}" "${RELEASE_NUMBER}"
                                            '''
                                        }
                                    }
                                    sh '''
                                        cd dist/dxc-ngx-cdk
                                        cp ../../projects/dxc-ngx-cdk/package.json ../../projects/dxc-ngx-cdk/src/lib/package.json
                                        cp ../../.npmignore ../../projects/dxc-ngx-cdk/src/lib/.npmignore
                                        npm config set @diaas:registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                                        npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                                    '''
                                }
                            }
                        }
                        stage('Push UX-Web library artifact to development') {
                            when { branch 'development' }
                            steps {
                                sh "sed -i -e 's/0.0.0/'0.0.0-beta.${BUILD_ID}'/g' ./dist/dxc-ngx-cdk/package.json"
                                sh "cat package.json"
                                sh '''
                                    cd dist/dxc-ngx-cdk
                                    cp ../../projects/dxc-ngx-cdk/package.json ../../projects/dxc-ngx-cdk/src/lib/package.json
                                    cp ../../.npmignore ../../projects/dxc-ngx-cdk/src/lib/.npmignore
                                    npm config set @diaas:registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                                    npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                                '''
                            }
                        }
                    }
                }
                stage('Deploy Storybook'){
                    stages{
                        stage('Build Storybook') {
                            steps {
                                sh '''
                                    npm run build-storybook
                                '''
                            }
                        }
                        stage('Deploy to S3 bucket from development') {
                            when { branch 'development' }
                            steps {
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
                            }
                        }
                        stage('Deploy to S3 bucket from master') {
                            when { branch 'master' }
                            steps {
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
                            }
                        }
                    }
                }
            }
        }  

    }
}
