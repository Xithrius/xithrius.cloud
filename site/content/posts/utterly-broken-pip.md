---
title: "Utterly broken pip"
date: "2022-07-31"
---

The following blog shows *a* solution to the error I once encountered below, while installing a PyPI package.

```
Traceback (most recent call last):
  File "/usr/bin/pip", line 5, in <module>
    from pip._internal.cli.main import main
  File "/usr/lib/python3.10/site-packages/pip/_internal/cli/main.py", line 9, in <module>
    from pip._internal.cli.autocompletion import autocomplete
  File "/usr/lib/python3.10/site-packages/pip/_internal/cli/autocompletion.py", line 10, in <module>
    from pip._internal.cli.main_parser import create_main_parser
  File "/usr/lib/python3.10/site-packages/pip/_internal/cli/main_parser.py", line 8, in <module>
    from pip._internal.cli import cmdoptions
  File "/usr/lib/python3.10/site-packages/pip/_internal/cli/cmdoptions.py", line 29, in <module>
    from pip._internal.models.target_python import TargetPython
  File "/usr/lib/python3.10/site-packages/pip/_internal/models/target_python.py", line 6, in <module>
    from pip._internal.utils.compatibility_tags import get_supported, version_info_to_nodot
  File "/usr/lib/python3.10/site-packages/pip/_internal/utils/compatibility_tags.py", line 7, in <module>
    from pip._vendor.packaging.tags import (
ImportError: cannot import name 'PythonVersion' from 'pip._vendor.packaging.tags' (/home/xithrius/.local/lib/python3.10/site-packages/packaging/tags.py)
```

Head to [this](https://pip.pypa.io/en/stable/installation/#get-pip-py) section of the pip installation site, download then run the `get-pip.py` script.

If the script runs without error, then you should be fine. Otherwise, I wish you luck on your journey. If you find another solution to this problem, be sure to contribute to this post by posting an issue [here](https://github.com/Xithrius/xithrius.cloud/issues/new).
