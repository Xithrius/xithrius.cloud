---
title: "VSCode settings and extensions"
date: "2023-03-04"
---

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): Improve highlighting of errors, warnings and other language diagnostics.

- [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings): Popular Atom keybindings for Visual Studio Code

- [Better TOML](https://marketplace.visualstudio.com/items?itemName=bungcip.better-toml): Better TOML Language support.

- [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb): A native debugger powered by LLDB. Debug C++, Rust and other compiled languages.

- [Crates](https://marketplace.visualstudio.com/items?itemName=serayuzgur.crates): Helps Rust developers managing dependencies with Cargo.toml.

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker): Makes it easy to create, manage, and debug containerized applications.

- [Doxygen Documentation Generator](https://marketplace.visualstudio.com/items?itemName=cschlosser.doxdocgen): Let me generate Doxygen documentation from your source code for you.

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph): View a Git Graph of your repository, and perform Git actions from the graph.

- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode): AI-assisted development.

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): Material Design Icons for Visual Studio Code.

- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme): Atom‘s iconic One Dark theme for Visual Studio Code.

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Code formatter using prettier.

- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers): Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set.

- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer): Rust language support for Visual Studio Code.

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Intelligent Tailwind CSS tooling for VS Code.

- [Open in GitHub](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-open-in-github): Open the current project or file in github.com.

- [Ruff](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff): A Visual Studio Code extension with support for the Ruff linter.

Below is the JSON file for general settings, and the extensions from above. I use zen mode (similar to distraction-free mode in JetBrains products) so there's less unecessary components on the screen.

```json
{
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.formatOnPaste": true,
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.suggestSelection": "first",
  "editor.fontFamily": "Fira Code",
  "editor.cursorBlinking": "expand",
  "editor.tabCompletion": "on",
  "editor.autoClosingQuotes": "always",
  "editor.autoClosingBrackets": "always",
  "editor.cursorStyle": "line-thin",
  "editor.minimap.renderCharacters": false,
  "editor.renderLineHighlight": "all",
  "editor.showFoldingControls": "always",
  "editor.stickyTabStops": true,
  "editor.find.autoFindInSelection": "multiline",
  "editor.formatOnSave": true,
  "editor.minimap.enabled": false,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "files.watcherExclude": {
    "**/Cargo.lock**": true,
    "**/oprofile_data/**": true,
    "**/target/**": true
  },
  "rust-analyzer.diagnostics.enable": true,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "One Dark Pro Flat",
  "workbench.editor.wrapTabs": true,
  "debug.allowBreakpointsEverywhere": true,
  "debug.showBreakpointsInOverviewRuler": true,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "oneDarkPro.vivid": true,
  "files.autoSave": "afterDelay",
  "editor.renderWhitespace": "none",
  "editor.bracketPairColorization.enabled": true,
  "workbench.startupEditor": "none",
  "diffEditor.ignoreTrimWhitespace": false,
  "workbench.sideBar.location": "right",
  "editor.smoothScrolling": true,
  "workbench.editor.enablePreview": false,
  "workbench.editor.enablePreviewFromCodeNavigation": true,
  "zenMode.fullScreen": false,
  "zenMode.hideTabs": false,
  "zenMode.hideLineNumbers": false,
  "eslint.validate": ["typescript", "typescriptreact"],
  "typescript.inlayHints.variableTypes.enabled": true,
  "javascript.inlayHints.variableTypes.enabled": true,
  "sqltools.highlightQuery": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "search.exclude": {
    "**/dist/**": true,
    "**/node_modules/**": true
  },
  "typescript.workspaceSymbols.scope": "currentProject",
  "search.useGlobalIgnoreFiles": true,
  "editor.inlayHints.fontSize": 13,
  "workbench.colorCustomizations": {
    "editorInlayHint.background": "#00000000",
    "editorInlayHint.foreground": "#979696"
  },
  "window.menuBarVisibility": "toggle",
  "editor.cursorSmoothCaretAnimation": "on",
  "[python]": {
    "editor.defaultFormatter": "ms-python.python"
  },
  "files.exclude": {
    "**/__pycache__": true,
    "**/.idea": true,
    "**/.pytest_cache": true,
    "**/.venv": true,
    "**/node_modules": true,
    "**/.next": true,
    "**/coverage": true,
    "**/.swc": true
  },
  "telemetry.telemetryLevel": "off"
}
```
