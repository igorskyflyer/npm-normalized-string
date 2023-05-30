// Copyright: Igor Dimitrijević (@igorskyflyer)

import { ExtendableString } from '@igor.dvlpr/extendable-string'
import { LineEnding, LineEndings } from './LineEndings.mjs'

class NormalizedString extends ExtendableString {
  constructor(value: string, endings: LineEndings) {
    super(value, (str) => {
      if (LineEnding[endings] === LineEnding.crlf) {
        return str.replace(/\r\n/g, '\n')
      }

      return str.replace(/\r?\n/g, '\n')
    })
  }
}
