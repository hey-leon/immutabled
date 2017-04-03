// @flow


/**
 * implementation for List#fold
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List} l to fold
 * @param {any} f accumulator
 * @param {any} i initial accum value
 */
export const fold: (l: List, f: Func, i: any) => any =
  (l, f, i) => Array.prototype.reduce.call(l.__data__, f, i)


export default curry(fold)
