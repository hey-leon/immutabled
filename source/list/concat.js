// @flow


/**
 * implementation for List#concat
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { of }    from './of'
import { curry } from '../utils/curry'

import type { List } from '../consts/types'


/**
 * @param {List} l1 to concat
 * @param {any} l2 to be predicate
 */
export const concat: (l1: List, l2: List) => List =
  (l1, l2) => of( Array.prototype.concat.call(l1.__data__, l2.__data__) )


export default curry(concat)
