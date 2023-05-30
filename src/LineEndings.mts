export const LineEnding = {
  lf: 100,
  crlf: 200,
} as const

export type LineEndings = keyof typeof LineEnding
