// @flow


/**
 * implementation for Map#update
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import Symbols from '../consts/symbols'

import { curry } from '../utils/curry'

import type { Map, Func } from '../consts/types'


/**
 * @param {Map}  m to set value on
 * @param {any}  k is the key of the value to get
 * @param {Func} f to update value on map
 */
export const update: (m: Map, k: any, f: Func) => Map =
  (m, k, f) => ({
    __type__: Symbols.Map,
    __size__: m.__data__[k] ? m.__size__ : m.__size__ + 1,
    __data__: {
      ...m.__data__, [k]: f(m.__data__[k]),
    },
  })


export default curry(update)
