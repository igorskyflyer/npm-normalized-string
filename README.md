<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-normalized-string/main/media/normalized-string.png" alt="Icon of Normalized String" width="256" height="256">
  <h1>Normalized String</h1>
</div>

<br>

<h4 align="center">
  💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🔄 Guarantees consistent line endings across platforms
- ⚙️ Automatically normalizes text to `LF` or `CRLF` format
- 🛡️ Prevents mixed or invalid newline styles  
- 🧩 Extends base transformation logic for easy reuse
- 📦 Encapsulates normalization in a single class
- 🚀 Delivers ready-to-use normalized string output

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/normalized-string
```

```bash
yarn add @igorskyflyer/normalized-string
```

```bash
npm i @igorskyflyer/normalized-string
```

<br>
<br>

## 🤹🏼 API

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
<br>

## 🗒️ Examples

```ts
import { NormalizedString, LineEnding } from '@igorskyflyer/normalized-string'

const loremIpsum: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'

const lfEndings: NormalizedString = new NormalizedString(loremIpsum)

lfEndings.value = 'Hello\r\nworld!'

console.log(JSON.stringify(lfEndings.value)) // returns 'Hello\nworld'
```

<br>
<br>

```ts
import { NormalizedString, LineEnding } from '@igorskyflyer/normalized-string'

const loremIpsum: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'

const lfEndings: NormalizedString = new NormalizedString(loremIpsum) // LF are the default endings
const crlfEndings: NormalizedString = new NormalizedString(loremIpsum, LineEnding.crlf)

console.log(JSON.stringify(lfEndings.value)) // returns 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'
console.log(JSON.stringify(crlfEndings.value)) // returns 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\r\n\r\nDuis in nulla ut leo lobortis venenatis.'
```


<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-normalized-string/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-normalized-string/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/zing](https://www.npmjs.com/package/@igorskyflyer/zing)

> _🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments - composite formatting. 🚀_

<br>

[@igorskyflyer/strip-html](https://www.npmjs.com/package/@igorskyflyer/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>

[@igorskyflyer/common-color](https://www.npmjs.com/package/@igorskyflyer/common-color)

> _🎨 Provides common Color-related TypeScript types. 🌈_

<br>

[@igorskyflyer/astro-escaped-component](https://www.npmjs.com/package/@igorskyflyer/astro-escaped-component)

> _🏃🏻‍♂️‍➡️ An Astro component that holds only HTML-encoded content. 📜_

<br>

[@igorskyflyer/duoscribi](https://www.npmjs.com/package/@igorskyflyer/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
