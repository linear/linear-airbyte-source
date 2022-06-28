FROM node:16
RUN apt-get update
RUN apt-get install qemu qemu-user-static binfmt-support debootstrap -y
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
