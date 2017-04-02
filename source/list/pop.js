// @flow


/**
 * implementation for List#pop
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { of }    from './of'
import { curry } from '../utils/curry'

import type { List } from '../consts/types'


/**
 * @param {List} l push value on
 */
export const pop: (l: List) => List =
  l => {
    const data = [ ...l.__data__ ]

    data.pop()

    return of(data)
  }


export default curry(pop)
