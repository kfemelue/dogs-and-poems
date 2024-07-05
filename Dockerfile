# syntax=docker/dockerfile:1
#!/bin/sh
FROM ubuntu:latest
RUN apt-get -y update

# Install git
RUN apt-get -y install git
RUN apt-get -y install curl
RUN apt-get -y install yarn

# Install Node Version Manager and Node

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NODE_VERSION=18.17.0
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# Verify installation
RUN node -v && npm -v

RUN git clone https://github.com/kfemelue/dogs-and-poems.git

RUN cd dogs-and-poems

WORKDIR /app

COPY . /app

RUN cd /app

# Install Node Dependencies
RUN npm ci -y

EXPOSE 3000

# start the app
CMD ["npm", "run", "start"]
