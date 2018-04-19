declare module "sqip" {
  export interface IImgDimensions {
    width: number
    height: number
  }

  export interface IResult {
    final_svg: string
    svg_base64encoded: string
    img_dimensions: IImgDimensions
  }

  export const enum Primitive {
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

  /**
   * @param mode The style of primitives to use. Defaults to 0.
   * @param blur GaussianBlur SVG filter value. Disable via 0, defaults to 12
   */
  export interface IAPIOptions extends IImgDimensions {
    filename: string
    blur: number
    numberOfPrimitives: number // default 8
    mode: Primitive
  }

  export default function fct(apiOptions: IAPIOptions): IResult
}
