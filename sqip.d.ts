declare module "sqip" {
  interface IImgDimensions {
    width: number
    height: number
  }

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

  interface IAPIOptions extends IImgDimensions {
    filename: string
    blur: number
    numberOfPrimitives: number
    mode: Primitive | number
  }

  interface IResult {
    final_svg: string
    svg_base64encoded: string
    img_dimensions: IImgDimensions
  }

  function sqip(options: IAPIOptions): IResult

  namespace sqip {

  }

  export = sqip
}
