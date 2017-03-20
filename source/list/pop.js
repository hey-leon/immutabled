// @flow


/**
 * implementation for List#pop
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import symbols from '../consts/symbols'

import type { List } from '../consts/types'


/**
 * @param {List} l push value on
 */
export const pop: (l: List) => List =
  l => {
    const data = [ ...l.__data__ ]

    data.pop()

    return {
      __type__: symbols.list,
      __data__: data,
      __size__: data.length,
    }
  }


export default pop
