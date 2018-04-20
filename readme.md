# sqipify

[![Build Status](https://travis-ci.com/ltetzlaff/sqipify.svg?token=<token>&branch=master)](https://travis-ci.com/ltetzlaff/sqipify)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Demo

Generate SVG Placeholders for Images using [SQIP](https://github.com/technopagan/sqip) based on [Primitive](https://github.com/fogleman/primitive).

### Reference Image

<img src="./norway.jpg>

700x882, 24 bit, 58.3 KB

### Parameters

| *blur* | numberOfPrimitives = 10 | numberOfPrimitives = 50 | numberOfPrimitives = 100 | numberOfPrimitives = 500 |
|--------|-----------------------------------------------|------------------------------------------------|-------------------------------------------------|--------------------------------------------------|
| 0      | <img src="test-results/p10b0m0.svg"> 859 B    | <img src="test-results/p50b0m0.svg"> 3.50 KB   | <img src="test-results/p100b0m0.svg"> 6.59 KB   | <img src="test-results/p500b0m0.svg"> 37.52 KB   |
| 5      | <img src="test-results/p10b5m0.svg"> 913 B    | <img src="test-results/p50b5m0.svg"> 3.9 KB   | <img src="test-results/p100b5m0.svg"> 6.48 KB   | <img src="test-results/p500b5m0.svg"> 37.93 KB   |
| 10     | <img src="test-results/p10b10m0.svg"> 1019 B  | <img src="test-results/p50b10m0.svg"> 3.58 KB  | <img src="test-results/p100b10m0.svg"> 6.61 KB  | <img src="test-results/p500b10m0.svg"> 38.13 KB  |
| 25     | <img src="test-results/p10b25m0.svg"> 995 B   | <img src="test-results/p50b25m0.svg"> 3.48 KB  | <img src="test-results/p100b25m0.svg"> 6.42 KB  | <img src="test-results/p500b25m0.svg"> 37.88 KB  |
| 100    | <img src="test-results/p10b100m0.svg"> 1010 B | <img src="test-results/p50b100m0.svg"> 3.72 KB | <img src="test-results/p100b100m0.svg"> 6.73 KB | <img src="test-results/p500b100m0.svg"> 38.01 KB |

### Only Triangles

| *blur* | numberOfPrimitives = 10 | numberOfPrimitives = 50 | numberOfPrimitives = 100 | numberOfPrimitives = 500 |
|--------|--------------------------------------------|----------------------------------------------|-----------------------------------------------|------------------------------------------------|
| 0      | <img src="test-results/p10b0m1.svg"> 714 B | <img src="test-results/p50b0m1.svg"> 3.04 KB | <img src="test-results/p100b0m1.svg"> 5.83 KB | <img src="test-results/p500b0m1.svg"> 28.32 KB |
| 5      | <img src="test-results/p10b5m1.svg"> 797 B | <img src="test-results/p50b5m1.svg"> 3.09 KB | <img src="test-results/p100b5m1.svg"> 5.98 KB | <img src="test-results/p500b5m1.svg"> 28.17 KB |
| 10     | <img src="test-results/p10b10m1.svg"> 783 B | <img src="test-results/p50b10m1.svg"> 3.07  KB | <img src="test-results/p100b10m1.svg"> 5.92 KB | <img src="test-results/p500b10m1.svg"> 28.21 KB |

### Only Rectangles

| *blur* | numberOfPrimitives = 10 | numberOfPrimitives = 50 | numberOfPrimitives = 100 | numberOfPrimitives = 500 |
|--------|--------------------------------------------|----------------------------------------------|-----------------------------------------------|------------------------------------------------|
| 0      | <img src="test-results/p10b0m2.svg"> 647 B | <img src="test-results/p50b0m2.svg"> 2.72 KB | <img src="test-results/p100b0m2.svg"> 5.30 KB | <img src="test-results/p500b0m2.svg"> 25.95 KB |
| 5      | <img src="test-results/p10b5m2.svg"> 719 B | <img src="test-results/p50b5m2.svg"> 2.77 KB | <img src="test-results/p100b5m2.svg"> 5.38 KB | <img src="test-results/p500b5m2.svg"> 26.06 KB |
| 10     | <img src="test-results/p10b10m2.svg"> 719 B | <img src="test-results/p50b10m2.svg"> 2.80 KB | <img src="test-results/p100b10m2.svg"> 5.41 KB | <img src="test-results/p500b10m2.svg"> 26.02 KB |

## Use

```ts
import sqipify from "sqipify"
const { input, output } = await sqipify("norway.jpg", numberOfPrimitives, blur, mode)
```

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
