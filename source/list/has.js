// @flow


/**
 * implementation for List#has
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import type { List } from '../consts/types'


/**
 * @param {List} l to search in
 * @param {any} v to be predicate
 */
export const has: (l: List, v: any) => boolean =
  (l, v) => Array.prototype.includes.call(l.__data__, v)


export default curry(has)
