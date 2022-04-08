FROM ghcr.io/getzola/zola:v0.15.1

WORKDIR /site_guides

COPY . .

RUN zola serve --port 2000

ENV PORT=2000

EXPOSE 8001
