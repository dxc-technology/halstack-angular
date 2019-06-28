FROM node:10.16.0-alpine

RUN apk add --update git bash openssh curl

RUN npm config set unsafe-perm true

RUN npm install -g @angular/cli

RUN npm install -g release

RUN npm install github-release-notes -g

RUN gem install github_changelog_generator

RUN npm install -g @compodoc/compodoc

RUN npm install showdown -g

ENV AWS_CLI_VERSION 1.15.47

RUN apk --no-cache update && \
    apk --no-cache add python py-pip py-setuptools ca-certificates groff less && \
    pip --no-cache-dir install awscli==${AWS_CLI_VERSION} && \
    rm -rf /var/cache/apk/*