---
title: "Migration from Visual Studio Code to Neovim"
pubDate: "2023-03-24"
archiveReason: "I no longer use Neovim as my main editor."
---

![Alpha dashboard](/images/posts/vscode-to-neovim/alpha-dashboard.png)

Preface: current dotfiles can be seen for neovim specifically [here](https://github.com/Xithrius/dotfiles/tree/main/.config/nvim).

The migration has been done. No more vscode gobbling up all my ram.

The first steps in this migration was to use [kickstart](https://github.com/nvim-lua/kickstart.nvim), which is [explained in depth](https://youtu.be/stqUbv-5u2s) by the legend, [TJ](https://github.com/tjdevries). The video teaches you how to get the initialization script, and how to navigate your config.

Afterwards, I searched around for things that I'd like to have, such as [autopairing brackets](https://github.com/windwp/nvim-autopairs) and [better problem diagnosis](https://github.com/folke/trouble.nvim).

If you want the pre-configured neovim experience, then I'd suggest getting [LazyVim](https://github.com/LazyVim/LazyVim).

Some neat plugins can be found in [folke](https://github.com/folke)'s repositories, they've made most of the previously named plugins.

Once you're in neovim with the kickstart config, type `:Mason` to pull up the LSP menu. Install the ones you want, maybe even some formatters or linters from the top tabs, and you'll be on your way.

I'd very much recommend the [alpha dashboard](https://github.com/goolord/alpha-nvim) plugin, as it allows you to customize your start screen. An example of it is the screenshot from the start of this post.

That's all for now.
