// @flow


/**
 * implementation for Map#partition
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import of from './of'

import type { Map, Func } from '../consts/types'


/**
 * @param {Map} m map to partition
 * @param {Func} f predicate
 */
export const partition: (m: Map, f: Func) => void | [ Map, Map ] =
  (m, f) => Object
              .entries(m.__data__)
              .reduce(pEntry(f), [ of(), of() ])


/**
 * @param {Function} f predicate
 */
export const pEntry: Func => ([Map, Map], [any, any], number, any[]) => [Map, Map] =
  f => ([ l, r ], [ k, e ], i, a) => {
    const p = f(e)

    l.__data__ = p ? { ...l.__data__, [k]: e } : l.__data__
    r.__data__ = p ? r.__data__ : { ...r.__data__, [k]: e }

    if (i === a.length - 1) {
      l.__size__ = Object.keys(l.__data__).length
      r.__size__ = Object.keys(r.__data__).length
    }

    return [ l, r ]
  }


export default curry(partition)
