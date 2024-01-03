---
title: "Maximum amount of parallel jobs for Cargo"
date: "2024-01-03"
---

Sometimes Cargo makes my CPU cores go to the surface temperature of the sun. To avoid this, set the `build.jobs` integer in `~/.cargo/config.toml` to something below your CPU core count:

```toml
[build]
jobs = 4
```

Source: https://doc.rust-lang.org/cargo/reference/config.html#buildjobs
