// @flow


/**
 * implementation for list#partition
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { of }    from './of'
import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List} l to partition
 * @param {Func} f predicate
 */
export const partition: (l: List, f: Func) => void | [ List, List ] =
  (l, f) => l.__data__.reduce(pEntry(f), [ of(), of() ])


/**
 * @param {Function} f predicate
 */
export const pEntry: Func => ([List, List], any, number, any[]) =>  [List, List ] =
  f => ([ l, r ], v, i, a) => {
    const p = f(v)

    l.__data__ = p ? [ ...l.__data__, v ] : l.__data__
    r.__data__ = p ? r.__data__ : [ ...r.__data__, v ]

    if (i === a.length - 1) {
      l.__size__ = l.__data__.length
      r.__size__ = r.__data__.length
    }

    return [ l, r ]
  }


export default curry(partition)
