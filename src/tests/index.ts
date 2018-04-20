import testCases from "./testCases"
import { Test } from "./test"

async function run() {
  await Promise.all(testCases.map(async t => new Test(t).run()))
}

run()
