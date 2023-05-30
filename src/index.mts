// Copyright: Igor Dimitrijević (@igorskyflyer)

import { ExtendableString } from '@igor.dvlpr/extendable-string'
import { LineEnding } from './LineEnding.mjs'

class NormalizedString extends ExtendableString {
  constructor(value: string, endings: LineEnding = 'lf') {
    super(value, (str) => {
      if (endings === 'crlf') {
        return str.replace(/\r?\n/g, '\r\n')
      }

      return str.replace(/\r\n/g, '\n')
    })
  }
}
