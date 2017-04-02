// @flow


/**
 * implementation for List#some
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List} l to check if some
 * @param {any} f to be predicate
 */
export const some: (l: List, f: Func) => boolean =
  (l, f) => Array.prototype.some.call(l.__data__, f)


export default curry(some)

