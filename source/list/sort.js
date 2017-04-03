// @flow


/**
 * implementation for List#sort
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { of }    from './of'
import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List} l to sort
 * @param {any} f sorter
 */
export const sort: (l: List, f: Func) => List =
  (l, f) => of( Array.prototype.sort.call(l.__data__, f) )


export default curry(sort)
