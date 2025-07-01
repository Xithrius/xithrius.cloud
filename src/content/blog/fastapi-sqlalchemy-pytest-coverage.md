---
title: "FastAPI + SQLAlchemy PyTest coverage"
pubDate: "2024-03-20"
---

If you try to run [pytest-cov](https://pypi.org/project/pytest-cov/) with FastAPI and SQLAlchemy, you'll get a bunch of uncovered lines since the default configuration won't work.

An example line that wouldn't be covered in this senario would be `items.scalars().first()`. First, add the [gevent](https://pypi.org/project/gevent/) package to your environment, and then add the following lines to your `pyproject.toml`:

```toml
[tool.coverage.run]
concurrency = ["gevent"]
```

If you don't have a script for running tests in `pyproject.toml`, you can use something like

```toml
test-cov = "python3 -m pytest --cov=./ --cov-report=xml"
```

Original issue: https://github.com/nedbat/coveragepy/issues/1012
