
import fs from 'fs'
import {resolve} from 'path'


/**
 *Read the file log
 *
 * @export
 * @param {string} path - The absolute path of you <file>.log
 * @returns {Array<string>} lines - Return all lines of <file>.log as string's array
 */
export function readLog(path) {
  const lines = fs.readFileSync(path).toString().split('\n')

  return lines
}
