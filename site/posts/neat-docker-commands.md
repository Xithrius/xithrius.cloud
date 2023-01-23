---
title: "Neat Docker commands"
excerpt: "Docker does the do."
date: "2022-01-22"
---

With the docker command below, you're able to create an Ubuntu shell with the files contained in the current working directory. This is neat for quickly testing out something like a shell script on a different version of Ubuntu, or just seeing if your C program compiles at all somewhere else.

```
docker run -it -v "$PWD:/workspace" -w /workspace ubuntu:20.04 /bin/bash
```

Another neat command gives you a `psql` shell in a postgres container. For example, if we were to have the `docker-compose.yml` file below,

```yml
version: "3.7"

services:
  postgres:
    container_name: a-postgres-container

    image: postgres:latest

    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}

    ports:
      - "5432:5432"
```

Then we'd be able to execute what's below to be able to get that `psql` shell, as the user `postgres`.

```
docker exec -it a-postgres-container psql -U postgres
```

Not all containers support this, but sometimes you're able to create a bash shell within a container with the following, where `a-container` is the name of the container.

```
docker exec -it a-container /bin/bash
```
