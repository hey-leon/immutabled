// @flow


/**
 * implementation for List#indexOf
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import type { List } from '../consts/types'


/**
 * @param {List} l to indexOf
 * @param {any} i to find index of
 */
export const indexOf: (l: List, i: any) => number =
  (l, i) => Array.prototype.indexOf.call(l.__data__, i)


export default curry(indexOf)
