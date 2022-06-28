FROM --platform=$BUILDPLATFORM node:16
WORKDIR /home/node/airbyte
RUN npm install --location=global npm@7 tsc

COPY package.json package-lock.json ./
RUN npm install

COPY ./resources ./resources
COPY ./src ./src
COPY ./bin ./bin
RUN npm run build
ENV AIRBYTE_ENTRYPOINT "/home/node/airbyte/bin/main"
ENTRYPOINT ["/home/node/airbyte/bin/main"]
