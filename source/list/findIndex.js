// @flow


/**
 * implementation for List#findIndex
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List} l to findIndex in
 * @param {any} f to be predicate
 */
export const findIndex: (l: List, f: Func) => number =
  (l, f) => Array.prototype.findIndex.call(l.__data__, f)


export default curry(findIndex)
