// Copyright: Igor Dimitrijević (@igorskyflyer)

import { ExtendableString } from '@igor.dvlpr/extendable-string'
import { LineEnding, LineEndings } from './LineEndings.mjs'

export class NormalizedString extends ExtendableString {
  constructor(value: string, endings: LineEndings = LineEnding.lf) {
    super(value, (str: string) => {
      if (endings === LineEnding.crlf) {
        return str.replace(/\r?\n/g, "\r\n")
      }

      return str.replace(/\r\n/g, "\n")
    })
  }
}
