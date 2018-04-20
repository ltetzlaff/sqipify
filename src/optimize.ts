// tslint:disable-next-line:no-require-imports
import SVGO = require("svgo")
// wait for https://github.com/DefinitelyTyped/DefinitelyTyped/pull/25172
//import * as SVGO from "svgo"

const optimizer = new SVGO()

export async function optimizeSVG(svg: string): Promise<string> {
  try {
    const optimized = await optimizer.optimize(svg)
    return optimized.data
  } catch (e) {
    console.error(`Could not optimize SVG, Error: ${JSON.stringify(e)}`)
    return ""
  }
}
