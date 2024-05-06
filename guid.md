## **Upgrade Bun to the Latest Version**

```
bun upgrade
```

## **Update Bun Packages without package.json**

```
bun update
```

## **Force Update Bun packages**

```
bun update --force
```

## **Update package.json with Bun**

```
npm install -g npm-check-updates
```

Then, run `npm-check-updates` with Bun to update your `package.json`:

```
bunx npm-check-updates -ui
```

This command will check for updates and interactively allow you to choose which packages to upgrade. After confirming the selections, npm-check-updates will update your package.json to reflect the latest versions.

# **VSCode Neovim Extension + My Neovim Config**

Commands for configuring key repeat rate on macOS:

```
defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
defaults write -g InitialKeyRepeat -int 10
defaults write -g KeyRepeat -int 1
```

Setting to quit insert mode by pressing the "j" key twice:

```
{
    "command": "vscode-neovim.compositeEscape1",
    "key": "j",
    "when": "neovim.mode == insert && editorTextFocus",
    "args": "j"
}
```
