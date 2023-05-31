// Copyright: Igor Dimitrijević (@igorskyflyer)

import { ExtendableString } from '@igor.dvlpr/extendable-string'
import { LineEnding, LineEndings } from './LineEnding.mjs'

class NormalizedString extends ExtendableString {
  constructor(value: string, endings: LineEndings = LineEnding.lf) {
    super(value, (str) => {
      if (endings === LineEnding.crlf) {
        return str.replace(/\r?\n/g, '\r\n')
      }

      return str.replace(/\r\n/g, '\n')
    })
  }
}
