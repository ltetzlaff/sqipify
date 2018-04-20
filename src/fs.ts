import { stat as fsStat, writeFile as fsWriteFile } from "fs"
import { promisify } from "util"

export const stat = promisify(fsStat)
export const writeFile = promisify(fsWriteFile)
