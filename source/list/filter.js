// @flow


/**
 * implementation for List#filter
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { of }    from './of'
import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List} l to filter
 * @param {any} f to be predicate
 */
export const filter: (l: List, f: Func) => List =
  (l, f) => of( Array.prototype.filter.call(l.__data__, f) )


export default curry(filter)
