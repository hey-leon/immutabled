// @flow


/**
 * implementation for List#set
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import symbols from '../consts/symbols'

import { curry } from '../utils/curry'

import type { List, Func } from '../consts/types'


/**
 * @param {List}  l set value on
 * @param {any}  k is the key of the value to get
 * @param {Func} f to update value on map
 */
export const update: (l: List, k: any, f: Func) => List =
  (l, k, f) => {
    const data = [ ...l.__data__ ]

    data[k] = f(data[k])

    return {
      __type__: symbols.list,
      __data__: data,
      __size__: data.length,
    }
  }


export default curry(update)
