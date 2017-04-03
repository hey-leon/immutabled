// @flow


/**
 * implementation for List#map
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { of }    from './of'
import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List} l to map
 * @param {any} f to be mapping function
 */
export const map: (l: List, f: Func) => List =
  (l, f) => of( Array.prototype.map.call(l.__data__, f) )


export default curry(map)
