// @flow


/**
 * implementation for List#find
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List} l to find item in
 * @param {any} f to be predicate
 */
export const find: (l: List, f: Func) => any =
  (l, f) => Array.prototype.find.call(l.__data__, f)


export default curry(find)
