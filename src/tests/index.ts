import testCases from "./testCases"
import { Test } from "./test"

async function runAll() {
  await Promise.all(testCases.map(async t => new Test(t).run()))
}

async function run() {
  await new Test(testCases[0]).run()
}

if (process.argv.includes("--all") || process.argv.includes("-a")) {
  runAll()
} else {
  run()
}
