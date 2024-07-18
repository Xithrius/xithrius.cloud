---
title: "Fixing flashing electron apps in i3wm"
date: "2023-02-12"
---

Sometimes, switching to an electron app such as Visual Studio Code in i3wm can cause white flashing. I have found some workarounds, but as a warning, they might not work for you.

The first thing I noticed when trying to solve this problem was that the flashbangs would only occur if I stacked VSCode on itself or other applications with the stacking mode in i3wm which has a default execution of `Super + w`.

So, I decided to avoid this for the time being. The next thing is to use a compositor. Originally from [compton](https://github.com/chjj/compton), [picom](https://github.com/yshui/picom) was forked out of it to become the leading compositor.

There are two solutions using picom. Either turn on fading in your config at (most likely) `~/.config/picom/picom.conf` in the fading section with whatever delays of steps you like, or the following, which makes transitioning between windows "instant" (50ms), so no flashbang is included:

```toml
fading = true;
fade-in-step = 1;
fade-out-step = 1;
fade-delta = 50;
```
