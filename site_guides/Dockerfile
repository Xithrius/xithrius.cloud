FROM getzola/zola:v0.15.1

WORKDIR /site_guides

COPY . .

ENV PORT=2000

EXPOSE 2000

CMD ["zola", "serve", "--port", "2000"]
