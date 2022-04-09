FROM ghcr.io/getzola/zola:v0.15.3

WORKDIR /site_guides

COPY . .

EXPOSE 2000

ENTRYPOINT [ "/bin/zola", "serve", "-p", "2000" ]
