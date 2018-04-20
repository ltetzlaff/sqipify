export interface IImgDimensions {
  width: number
  height: number
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

export interface IAPIOptions extends IImgDimensions {
  filename: string
  blur: number
  numberOfPrimitives: number
  mode: Primitive | number
}
