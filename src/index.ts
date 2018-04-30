import sizeOf from "image-size"
import filesize from "filesize"
import { stat } from "./fs"
import { optimizeSVG } from "./optimize"
import { generateSVG } from "./generate"
import { Primitive } from "./sqip"

async function parseInput(filename: string) {
  const { width, height, type } = sizeOf(filename)
  const size = filesize((await stat(filename)).size)
  return { size, type, filename, width, height }
}

export default async function(
  filename: string,
  numberOfPrimitives: number,
  blur = 0,
  mode = Primitive.Combo,
  optimize = true
) {
  const input = await parseInput(filename)
  const { width, height } = input
  const options = {
    mode,
    blur,
    numberOfPrimitives,
    width,
    height,
    filename
  }

  const output = generateSVG(options)

  if (optimize) {
    const optimized = await optimizeSVG(output.svg)
    output.svgSize = filesize(optimized.length)
    output.svg = optimized
  }

  return {
    input,
    output
  }
}
