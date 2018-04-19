import sqip, { Primitive } from "sqip"
import * as sizeOf from "image-size"

export default function svgify(
  filename: string,
  numberOfPrimitives: number,
  blur = 0,
  mode = Primitive.Combo
) {
  const { width, height, type } = sizeOf(filename)
  const options = {
    mode,
    blur,
    numberOfPrimitives,
    width,
    height,
    filename
  }
  const { final_svg, img_dimensions, svg_base64encoded } = sqip(options)
  return {
    width,
    height,
    type,
    filename,
    svg: final_svg,
    base64: svg_base64encoded
  }
}
