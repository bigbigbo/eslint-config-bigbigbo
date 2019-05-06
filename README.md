# eslint-config-bigbigbo
A eslint configuration that lint your `.js(x)` and `.ts(x)` file.

## Install
use npm:
```bash
npm install eslint-config-bigbigbo -D
```

use yarn: 
```bash
yarn add eslint-config-bigbigbo -D
```

## Usage
if you just lint `.js` file, edit your `.eslintrc` file: 
```js
{
  extends: "bigbigbo"
}
```

lint `.jsx` file, edit your `.eslintrc` file:
```js
{
  extends: "bigbigbo/lib/javascriptreact"
}
```

lint `.ts` file, edit your `.eslintrc` file: 
```js
{
  extends: "bigbigbo/lib/typescript"
}
```

lint `.tsx` file, edit your `.eslintrc` file:
```js
{
  extends: "bigbigbo/lib/typescriptreact"
}
```

if your project contains multiple file types, edit your `.eslintrc` file: 
```js
{
  extends: [
    "bigbigbo/lib/javascript",
    "bigbigbo/lib/javascriptreact",
    "bigbigbo/lib/typescript",
    "bigbigbo/lib/typescriptreact"
  ]
}
``` 

### Other
if you use vscode, install `VS Code Eslint extension` and edit your `setting.json`: 
```json
{
  "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ]
}
```

## Changelog
see [CHANGELOG.md](./CHANGELOG.md)
