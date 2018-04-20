import m from ".."
import { writeFileSync } from "fs"
import { resolve, dirname, join } from "path"

const file = "./norway.jpg"

const enum Primitive {
  Combo = 0,
  Triangle = 1,
  Rect = 2,
  Ellipse = 3,
  Circle = 4,
  RotatedRect = 5,
  Beziers = 6,
  RotatedEllipse = 7,
  Polygon = 8
}

// tslint:disable-next-line:no-magic-numbers
const result = m(file, 20, 12, Primitive.Combo)
const base = join(dirname(resolve(file)), "src", "tests", "result.")

writeFileSync(base + "svg", result.svg)
writeFileSync(base + "base64.txt", result.base64)

console.log(`
  Testing svgify on: ${file}
    Type: ${result.type}, Dimensions: ${result.width}x${result.height}
    Results are placed in "${base}*
`)
