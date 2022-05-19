# My personal website (WIP)

Migrated from Hugo to 11ty.

## Clone repo

```sh
git clone https://github.com/josephsv96/website
```

## Run locally

```sh
# Install dependencies
npm install
# Run development server
npm run dev
# Run production server
npm run build
```

## Google Lighthouse

```sh
npx lighthouse http://localhost:8080 --view --chrome-flags="--headless" --form-factor desktop --screenEmulation.disabled
```
