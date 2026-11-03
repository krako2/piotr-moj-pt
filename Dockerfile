FROM debian:trixie

RUN apt update
RUN apt upgrade -y
RUN apt install -y git curl
RUN curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
RUN apt install -y nodejs
RUN node -v
RUN npm -v
RUN npm i -g pnpm

COPY . /root
WORKDIR /root

RUN pnpm i

CMD ["pnpm", "dev"]
