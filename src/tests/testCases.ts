import { ITestCase } from "./ITestCase"
import { Primitive } from "../sqip"

const file = "./norway.jpg"

export default [
  // tslint:disable:no-magic-numbers
  // Useful
  { numberOfPrimitives: 10, blur: 10, mode: Primitive.Combo },
  { numberOfPrimitives: 50, blur: 10, mode: Primitive.Combo },
  { numberOfPrimitives: 100, blur: 10, mode: Primitive.Combo },
  { numberOfPrimitives: 500, blur: 10, mode: Primitive.Combo },

  // No Blur
  { numberOfPrimitives: 10, blur: 0, mode: Primitive.Combo },
  { numberOfPrimitives: 50, blur: 0, mode: Primitive.Combo },
  { numberOfPrimitives: 100, blur: 0, mode: Primitive.Combo },
  { numberOfPrimitives: 500, blur: 0, mode: Primitive.Combo },

  // Only Triangles
  { numberOfPrimitives: 10, blur: 10, mode: Primitive.Triangle },
  { numberOfPrimitives: 50, blur: 10, mode: Primitive.Triangle },
  { numberOfPrimitives: 100, blur: 10, mode: Primitive.Triangle },
  { numberOfPrimitives: 500, blur: 10, mode: Primitive.Triangle }
  // tslint:enable:no-magic-numbers
].map(t => ({
  file,
  name: `p${t.numberOfPrimitives}b${t.blur}m${t.mode}`,
  ...t
})) as ReadonlyArray<ITestCase>
