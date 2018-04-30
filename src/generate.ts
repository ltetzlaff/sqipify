import { IAPIOptions, Primitive } from "./sqip"
import sqip from "sqip"
import filesize from "filesize"

export function generateSVG(options: IAPIOptions) {
  const { final_svg: svg, svg_base64encoded: base64 } = sqip(options)
  const svgSize = filesize(svg.length)
  const base64Size = filesize(base64.length)
  return { svg, base64, svgSize, base64Size }
}
