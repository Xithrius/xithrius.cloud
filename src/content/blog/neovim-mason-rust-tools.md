---
title: "Rust tools with kickstart.nvim"
pubDate: "2023-03-25"
---

I had a problem recently with [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) where I wasn't able to get inlay hints working from [rust-tools.nvim](https://github.com/simrat39/rust-tools.nvim).

This was caused by [rust-analyzer](https://github.com/rust-lang/rust-analyzer) being set as the handler, and not rust-tools.

To fix this, simply modify the line containing `require("mason-lspconfig").setup_handlers` in your `init.lua` with the following:

```lua
require("mason").setup()
require("mason-lspconfig").setup()

require("mason-lspconfig").setup_handlers {
    function (server_name) -- default handler (optional)
        require("lspconfig")[server_name].setup {}
    end,
    ["rust_analyzer"] = function ()
        require("rust-tools").setup {}
    end
}
```

Credit goes to [this](https://github.com/nvim-lua/kickstart.nvim/pull/107#issuecomment-1368613366) PR comment.
