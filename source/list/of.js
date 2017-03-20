// @flow


/**
 * implementation for List#of
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import symbols from '../consts/symbols'

import type { List } from '../consts/types'


/**
 * @param {Array<any>|List} s of data to build list from
 */
export const of: (s?: List | Array<any>) => List =
  (s=[]) => Array.isArray(s)
          ? build([ ...s ], s.length)
          : build([ ...s.__data__ ], s.__size__)


export const build: (data: Array<any>, size: number) => any =
  (data, size) => ({
    __type__: symbols.list,
    __data__: data,
    __size__: size,
  })


export default of
