import * as sqip from "sqip"
import { IAPIOptions, Primitive } from "./sqip"
import * as sizeOf from "image-size"
import * as filesize from "filesize"
import { stat } from "./fs"

async function parseInput(filename: string) {
  const { width, height, type } = sizeOf(filename)
  const size = filesize((await stat(filename)).size)
  return { size, type, filename, width, height }
}

function svgify(options: IAPIOptions) {
  const { final_svg: svg, svg_base64encoded: base64 } = sqip(options)
  const svgSize = filesize(svg.length)
  const base64Size = filesize(base64.length)
  return { svg, base64, svgSize, base64Size }
}

export default async function(
  filename: string,
  numberOfPrimitives: number,
  blur = 0,
  mode = Primitive.Combo
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

  const output = svgify(options)

  return {
    input,
    output
  }
}
