import SVGO from "svgo"

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
