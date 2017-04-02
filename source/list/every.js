// @flow


/**
 * implementation for List#every
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List} l to check if every
 * @param {any} f to be predicate
 */
export const every: (l: List, f: Func) => boolean =
  (l, f) => Array.prototype.every.call(l.__data__, f)


export default curry(every)

