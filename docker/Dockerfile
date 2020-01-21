FROM node:10.13

RUN apt-get update && \
    apt-get install -y \
    git bash openssh-client curl chromium libgtk2.0-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xvfb

RUN apt-add-repository ppa:brightbox/ruby-ng

RUN apt-get update

RUN apt-get install ruby2.6 ruby2.6-dev

RUN npm config set unsafe-perm true

RUN npm install -g @angular/cli

RUN npm install github-release-notes -g

RUN gem install github_changelog_generator

RUN npm install showdown -g

RUN npm install --save-dev cypress

RUN $(npm bin)/cypress verify

ENV AWS_CLI_VERSION 1.15.47

RUN apt-get install python py-pip py-setuptools ca-certificates groff less && \
    pip --no-cache-dir install awscli==${AWS_CLI_VERSION} && \
    rm -rf /var/cache/apk/*