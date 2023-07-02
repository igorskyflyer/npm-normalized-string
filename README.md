# normalized-string

💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮

<br>

<div align="center">
<h3>💖 Support further development</h3>
<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="108"></a>
</div>

<br>
<br>
<br>

## 🕵🏼‍♂️ Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/normalized-string"
```

<br>

## 🤹🏼‍♂️ API

```ts
constructor(value: string, endings: LineEndings = LineEnding.lf)
```

`value` - A string to work with.

`endings` - The line endings to use:

- `LineEnding.lf` - UNIX-like line endings (line feed),

- `LineEnding.crlf` - Windows line endings (carriage return + line feed).

<br>
<br>

You can also set the property `value` directly and the line endings will be correct.

<br>

```ts
import { NormalizedString, LineEnding } from '@igor.dvlpr/normalized-string'

const loremIpsum: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'

const lfEndings: NormalizedString = new NormalizedString(loremIpsum)

lfEndings.value = 'Hello\r\nworld!'

console.log(JSON.stringify(lfEndings.value)) // returns 'Hello\nworld'
```

<br>
<br>

## 🤔 Examples

```ts
import { NormalizedString, LineEnding } from '@igor.dvlpr/normalized-string'

const loremIpsum: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'

const lfEndings: NormalizedString = new NormalizedString(loremIpsum) // LF are the default endings
const crlfEndings: NormalizedString = new NormalizedString(loremIpsum, LineEnding.crlf)

console.log(JSON.stringify(lfEndings.value)) // returns 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'
console.log(JSON.stringify(crlfEndings.value)) // returns 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\r\n\r\nDuis in nulla ut leo lobortis venenatis.'
```
