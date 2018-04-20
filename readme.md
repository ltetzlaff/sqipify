# sqipify

[![Build Status](https://travis-ci.com/ltetzlaff/sqipify.svg?token=<token>&branch=master)](https://travis-ci.com/ltetzlaff/sqipify)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Demo

Generate SVG Placeholders for Images using SQIP.

| | *numberOfPrimitives* |
| *blur*  | |


|     | 10 | 50 | 100 | 500 |
|-----|-------------------------------------|-------------------------------------|--------------------------------------|---------------------------------------|
| 0   | <img src="./p10b0m0.svg"> 1.12 KB   | <img src="./p50b0m0.svg"> 4.68 KB   | <img src="./p100b0m0.svg"> 8.79 KB   | <img src="./p500b0m0.svg"> 50.03 KB   |
| 10  | <img src="./p10b10m0.svg"> 1.33 KB  | <img src="./p50b10m0.svg"> 4.78 KB  | <img src="./p100b10m0.svg"> 8.81 KB  | <img src="./p500b10m0.svg"> 50.84 KB  |
| 25  | <img src="./p10b25m0.svg"> 995 B    | <img src="./p50b25m0.svg"> 4.64 KB  | <img src="./p100b25m0.svg"> 8.57 KB  | <img src="./p500b25m0.svg"> 50.51 KB  |
| 100 | <img src="./p10b100m0.svg"> 1.32 KB | <img src="./p50b100m0.svg"> 4.96 KB | <img src="./p100b100m0.svg"> 8.97 KB | <img src="./p500b100m0.svg"> 50.68 KB |

## Setup (in ./)

### Install NodeJS

[Download](https://nodejs.org/en/download/current/)

### Fetch dependencies

```bash
npm install
```

## Dev (in ./)

Typescript builds are automatic and watch for file changes:
```bash
npm run build
```

or run this to build only once:
```bash
npm run buildOnce
```

Building, Linting, Formatting, Testing:
```bash
npm test
```

## Contribution

- use `git pull --rebase` in favor of regular pull, i recommend configuring it globally via:
  ```bash
  git config --global pull.rebase true
  ```
