---
title: "Utterly broken pip"
date: "2022-07-31"
description: "Fixing a majorly broken pip install."
---

If you're getting an error such as `ImportError: cannot import name 'PythonVersion' from 'pip._vendor.packaging.tags'` on Arch Linux when trying to install packages through any means of `pip`, here is *a* (possibly not *the*) solution.

Head to [this](https://pip.pypa.io/en/stable/installation/#get-pip-py) section of the pip installation site, download then run the `get-pip.py` script.

If the script runs without error, then you should be fine. Otherwise, I wish you luck on your journey. If you find another solution to this problem, be sure to contribute to this post by posting an issue [here](https://github.com/Xithrius/xithrius.cloud/issues/new).
