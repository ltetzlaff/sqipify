import sqipify from ".."
import { resolve, dirname, join } from "path"
import { writeFile } from "../fs"
import { ITestCase } from "./ITestCase"

export class Test {
  constructor(private testCase: ITestCase) {}

  public async run() {
    const { file, numberOfPrimitives, blur, mode, name } = this.testCase
    const { input, output } = await sqipify(
      file,
      numberOfPrimitives,
      blur,
      mode
    )
    const base = join(dirname(resolve(file)), "src", "tests", "results", name)

    const writes = [
      { path: base + ".svg", content: output.svg, size: output.svgSize },
      {
        path: base + ".base64.txt",
        content: output.base64,
        size: output.base64Size
      }
    ]
    await Promise.all(writes.map(async w => writeFile(w.path, w.content)))

    console.log(`
  Testing sqipify on: ${file}
    Input: ${JSON.stringify(input)}
    Outputs: ${JSON.stringify(
      writes.map(({ path, size }) => ({ path, size }))
    )}`)
  }
}
