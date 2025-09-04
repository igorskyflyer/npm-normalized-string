// Copyright: Igor Dimitrijević (@igorskyflyer)

import { ExtendableString } from '@igorskyflyer/extendable-string'
import { LineEnding, LineEndings } from './LineEndings.mjs'

/**
 * A String class that always guarantees its line endings.
 */
export class NormalizedString extends ExtendableString {
  /**
   *
   * @param value A string to work with.
   * @param endings The line endings to use:
   *
   * - `LineEnding.lf` - UNIX-like line endings (line feed),
   *
   * - `LineEnding.crlf` - Windows line endings (carriage return + line feed).
   */
  constructor(value: string, endings: LineEndings = LineEnding.lf) {
    super(value, (str: string) => {
      if (endings === LineEnding.crlf) {
        return str.replace(/\r?\n/g, '\r\n')
      }

      return str.replace(/\r\n/g, '\n')
    })
  }
}

export { LineEnding, LineEndings }
