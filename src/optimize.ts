// tslint:disable-next-line:no-require-imports
//import SVGO = require("svgo")
import * as SVGO from "svgo"

const optimizer = new SVGO()

export async function optimizeSVG(svg: string): Promise<string> {
  try {
    const optimized = await optimizer.optimize(svg)
    return optimized.data
  } catch (e) {
    console.error(`Could not optimize SVG, Error: ${ JSON.stringify(e) }`)
    return ""
  }
}
