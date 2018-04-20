import { Primitive } from "../sqip"

export interface ITestCase {
  name: string
  file: string
  numberOfPrimitives: number
  blur: number
  mode: Primitive
}
