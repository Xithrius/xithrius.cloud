FROM ghcr.io/getzola/zola:v0.15.3

WORKDIR /site_guides

COPY . .

EXPOSE 2000

CMD [ "/bin/zola", "build", "--", "/bin/zola", "-i", "0.0.0.0", "-p", "2000" ]
