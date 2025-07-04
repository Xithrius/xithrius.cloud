---
title: "Reverting yay and pacman packages"
date: "2023-02-03"
---

## Downgrade

Simply install [downgrade](https://aur.archlinux.org/packages/downgrade) through your AUR package manager of choice, such as yay: `yay downgrade`. Then, for basic usage run it with the package you want to revert -- `downgrade obs-studio`. Select the version you want to go back to, and follow the instructions from that point forward.

## Pacman

If you want to do this with pacman packages, look in the directory of `/var/cache/pacman/pkg`. Let's use [obs-studio](https://github.com/obsproject/obs-studio) as an example.

Listing out all the previously downloaded versions in the cache:

```
$ ls /var/cache/pacman/pkg/obs-studio*.pkg.tar.zst
/var/cache/pacman/pkg/obs-studio-27.2.4-1-x86_64.pkg.tar.zst
/var/cache/pacman/pkg/obs-studio-27.2.4-2-x86_64.pkg.tar.zst
/var/cache/pacman/pkg/obs-studio-28.0.2-1-x86_64.pkg.tar.zst
/var/cache/pacman/pkg/obs-studio-28.0.2-2-x86_64.pkg.tar.zst
/var/cache/pacman/pkg/obs-studio-28.0.3-1-x86_64.pkg.tar.zst
/var/cache/pacman/pkg/obs-studio-28.0.3-2-x86_64.pkg.tar.zst
/var/cache/pacman/pkg/obs-studio-28.1.2-1-x86_64.pkg.tar.zst
/var/cache/pacman/pkg/obs-studio-28.1.2-2-x86_64.pkg.tar.zst
/var/cache/pacman/pkg/obs-studio-29.0.0-1-x86_64.pkg.tar.zst
```

To revert to `27.2.4-1`, we simply do the command below, and everything should work out.

```
sudo pacman -U /var/cache/pacman/pkg/obs-studio-27.2.4-1-x86_64.pkg.tar.zst
```

## Yay

The current release of vscode at the time of writing this post is [1.75](https://github.com/microsoft/vscode/releases/tag/1.75.0), which was released on February 2nd, 2023.

Due to broken features such as [non-functioning version control](https://github.com/microsoft/vscode/issues/173315), amongst other things, we can revert to 1.74.

Make sure there are previous versions in your cache. List out items within `.cache/yay/visual-studio-code-bin`, and hopefully some are still sitting around. If not, this post won't help beyond this point.

```
$ ls .cache/yay/visual-studio-code-bin/*.pkg.tar.zst
.cache/yay/visual-studio-code-bin/visual-studio-code-bin-1.73.1-1-x86_64.pkg.tar.zst
.cache/yay/visual-studio-code-bin/visual-studio-code-bin-1.73.1-2-x86_64.pkg.tar.zst
.cache/yay/visual-studio-code-bin/visual-studio-code-bin-1.74.1-1-x86_64.pkg.tar.zst
.cache/yay/visual-studio-code-bin/visual-studio-code-bin-1.74.2-1-x86_64.pkg.tar.zst
.cache/yay/visual-studio-code-bin/visual-studio-code-bin-1.74.3-1-x86_64.pkg.tar.zst
.cache/yay/visual-studio-code-bin/visual-studio-code-bin-1.75.0-1-x86_64.pkg.tar.zst
```

To revert to `1.74.3-1`, the second to last item in the list, we simply execute the following:

```
yay -U .cache/yay/visual-studio-code-bin/visual-studio-code-bin-1.74.3-1-x86_64.pkg.tar.zst
```

Restart vscode, and you will have the latest working version.
