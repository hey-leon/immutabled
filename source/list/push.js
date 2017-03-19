// @flow


/**
 * implementation for List#push
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import Symbols from '../consts/symbols'

import { curry } from '../utils/curry'

import type { List } from '../consts/types'


/**
 * @param {List}  l push value on
 * @param {any}  v to push
 */
export const push: (l: List, v: any) => List =
  (l, v) => ({
    __type__: Symbols.List,
    __data__: [ ...l.__data__, v ],
    __size__: l.__size__ + 1,
  })


export default curry(push)
