import m from ".."
import { resolve, dirname, join } from "path"
import { Primitive } from "../sqip"
import { writeFile } from "../fs"

const file = "./norway.jpg"

async function run() {
  // tslint:disable-next-line:no-magic-numbers
  const { input, output } = await m(file, 20, 12, Primitive.Combo)
  const base = join(dirname(resolve(file)), "src", "tests", "result")

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
    Type: ${input.type}, Dimensions: ${input.width}x${input.height}
    Results: ${JSON.stringify(writes)}`)
}

run()
