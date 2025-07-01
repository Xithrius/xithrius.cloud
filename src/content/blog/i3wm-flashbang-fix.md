---
title: "Fixing flashing electron apps in i3wm"
pubDate: "2023-02-12"
---

Switching to an electron app such as Visual Studio Code in i3wm can cause white flashing for a few frames when focusing from another workspace.

There are two solutions using the [picom compositor](https://github.com/yshui/picom). Either turn on fading in your config at (most likely) `~/.config/picom/picom.conf` in the fading section with whatever delays of steps you like or the example below which makes transitioning between windows "instant" (50ms, so close enough), so little to no flashbang is included, given your refresh rate.

```toml
fading = true;
fade-in-step = 1;
fade-out-step = 1;
fade-delta = 50;
```
