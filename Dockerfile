FROM launcher.gcr.io/google/nodejs
RUN install_node v16.13

WORKDIR /home/node/airbyte
RUN npm install -g npm@7 tsc

COPY package.json package-lock.json ./
RUN npm install

COPY ./resources ./resources
COPY ./src ./src
COPY ./bin ./bin
RUN npm run build
ENV AIRBYTE_ENTRYPOINT "/home/node/airbyte/bin/main"
ENTRYPOINT ["/home/node/airbyte/bin/main"]
