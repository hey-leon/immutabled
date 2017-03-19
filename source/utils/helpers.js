// @flow


import type { ErrorTypes } from '../consts/types'



export const runtimeError: (E: Class<ErrorTypes>, m: string) => void =
  (E, m) => { throw new E(m) }
