---
title: "VSCode settings and extensions"
excerpt: "Productivity, yes"
date: "2022-09-24"
---

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
  "rust-analyzer.checkOnSave.command": "clippy",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "One Dark Pro Flat",
  "workbench.editor.wrapTabs": true,
  "debug.allowBreakpointsEverywhere": true,
  "debug.showBreakpointsInOverviewRuler": true,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "atomKeymap.promptV3Features": true,
  "oneDarkPro.vivid": true,
  "files.autoSave": "afterDelay",
  "editor.renderWhitespace": "none",
  "editor.bracketPairColorization.enabled": true,
  "workbench.startupEditor": "none",
  "diffEditor.ignoreTrimWhitespace": false,
  "workbench.sideBar.location": "right",
  "window.menuBarVisibility": "hidden",
  "editor.smoothScrolling": true,
  "workbench.editor.enablePreview": false,
  "workbench.editor.enablePreviewFromCodeNavigation": true,
  "zenMode.fullScreen": false
}
```
