// Copyright: Igor Dimitrijević (@igorskyflyer)

import { ExtendableString } from '@igor.dvlpr/extendable-string'

class NormalizedString extends ExtendableString {
  constructor(value: string) {
    super(value, (str) => str.replace(/\r\n/g, '\n'))
  }
}
