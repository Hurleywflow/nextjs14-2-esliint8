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
