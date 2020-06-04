
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

/**
 * Process the lines with kills
 *
 * @export
 * @param {string} line - Single line of log file
 * @returns {boolean} - Return 
 */
export function processLineKills(line) {
  const regex = /\s?(\d+:\d+)\sKill:\s(\d+)\s(\d+)\s(\d+):\s(.*)\skilled\s(.*)\sby\s(.*)/i
  return !!line.match(regex)

}

