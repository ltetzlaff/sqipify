import { ITestCase } from "./ITestCase"
import { Primitive } from "../sqip"

const file = "./norway.jpg"

export default [
  // tslint:disable:no-magic-numbers
  // 0 Blur
  { numberOfPrimitives: 10, blur: 0, mode: Primitive.Combo }
  /*{ numberOfPrimitives: 50, blur: 0, mode: Primitive.Combo },
  { numberOfPrimitives: 100, blur: 0, mode: Primitive.Combo },
  { numberOfPrimitives: 500, blur: 0, mode: Primitive.Combo },

  // 5 Blur
  { numberOfPrimitives: 10, blur: 5, mode: Primitive.Combo },
  { numberOfPrimitives: 50, blur: 5, mode: Primitive.Combo },
  { numberOfPrimitives: 100, blur: 5, mode: Primitive.Combo },
  { numberOfPrimitives: 500, blur: 5, mode: Primitive.Combo },

  // 10 Blur
  { numberOfPrimitives: 10, blur: 10, mode: Primitive.Combo },
  { numberOfPrimitives: 50, blur: 10, mode: Primitive.Combo },
  { numberOfPrimitives: 100, blur: 10, mode: Primitive.Combo },
  { numberOfPrimitives: 500, blur: 10, mode: Primitive.Combo },

  // 25 Blur
  { numberOfPrimitives: 10, blur: 25, mode: Primitive.Combo },
  { numberOfPrimitives: 50, blur: 25, mode: Primitive.Combo },
  { numberOfPrimitives: 100, blur: 25, mode: Primitive.Combo },
  { numberOfPrimitives: 500, blur: 25, mode: Primitive.Combo },

  // 100 Blur
  { numberOfPrimitives: 10, blur: 100, mode: Primitive.Combo },
  { numberOfPrimitives: 50, blur: 100, mode: Primitive.Combo },
  { numberOfPrimitives: 100, blur: 100, mode: Primitive.Combo },
  { numberOfPrimitives: 500, blur: 100, mode: Primitive.Combo },

  // Only Triangles
  // 0 Blur
  { numberOfPrimitives: 10, blur: 0, mode: Primitive.Triangle },
  { numberOfPrimitives: 50, blur: 0, mode: Primitive.Triangle },
  { numberOfPrimitives: 100, blur: 0, mode: Primitive.Triangle },
  { numberOfPrimitives: 500, blur: 0, mode: Primitive.Triangle },

  // 5 Blur
  { numberOfPrimitives: 10, blur: 5, mode: Primitive.Triangle },
  { numberOfPrimitives: 50, blur: 5, mode: Primitive.Triangle },
  { numberOfPrimitives: 100, blur: 5, mode: Primitive.Triangle },
  { numberOfPrimitives: 500, blur: 5, mode: Primitive.Triangle },

  // 10 Blur
  { numberOfPrimitives: 10, blur: 10, mode: Primitive.Triangle },
  { numberOfPrimitives: 50, blur: 10, mode: Primitive.Triangle },
  { numberOfPrimitives: 100, blur: 10, mode: Primitive.Triangle },
  { numberOfPrimitives: 500, blur: 10, mode: Primitive.Triangle },

  // Only Rectangles
  // 0 Blur
  { numberOfPrimitives: 10, blur: 0, mode: Primitive.Rect },
  { numberOfPrimitives: 50, blur: 0, mode: Primitive.Rect },
  { numberOfPrimitives: 100, blur: 0, mode: Primitive.Rect },
  { numberOfPrimitives: 500, blur: 0, mode: Primitive.Rect },

  // 5 Blur
  { numberOfPrimitives: 10, blur: 5, mode: Primitive.Rect },
  { numberOfPrimitives: 50, blur: 5, mode: Primitive.Rect },
  { numberOfPrimitives: 100, blur: 5, mode: Primitive.Rect },
  { numberOfPrimitives: 500, blur: 5, mode: Primitive.Rect },

  // 10 Blur
  { numberOfPrimitives: 10, blur: 10, mode: Primitive.Rect },
  { numberOfPrimitives: 50, blur: 10, mode: Primitive.Rect },
  { numberOfPrimitives: 100, blur: 10, mode: Primitive.Rect },
  { numberOfPrimitives: 500, blur: 10, mode: Primitive.Rect }*/
  // tslint:enable:no-magic-numbers
].map(t => ({
  file,
  name: `p${t.numberOfPrimitives}b${t.blur}m${t.mode}`,
  ...t
})) as ReadonlyArray<ITestCase>
