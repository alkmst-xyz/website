# My personal website (WIP)

## Run locally

### Clone repo

```sh
git clone --recurse-submodules https://github.com/josephsv96/website
```

### Install dependencies

```sh
npm init --yes
npm install --save-dev autoprefixer postcss postcss-cli tailwindcss
```

### Optional

Prettier support for GoHtml files.

```sh
npm install --save-dev prettier prettier-plugin-go-template
```

Add to .vscode/.prettierrc

```json
{
  "overrides": [
    {
      "files": ["*.html"],
      "options": {
        "parser": "go-template"
      }
    }
  ]
}
```

### Start server

```sh
NODE_ENV=production hugo server -D
```

## Update [theme](https://github.com/josephsv96/hugo-theme-mistral)

```sh
git submodule foreach git pull
```
