// @flow


/**
 * implementation for Map#of
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import symbols from '../consts/symbols'

import type { Map } from '../consts/types'


/**
 * @param {any[]|Map} s of data to build map from
 */
export const of: (s?: Map | Object) => Map =
  (s={}) => s.__type__ === symbols.map
          ? build({ ...s.__data__ }, s.__size__)
          : build({ ...s }, Object.keys(s).length)


export const build: (data: Object, size: number) => Map =
  (data, size) => ({
    __type__: symbols.map,
    __data__: data,
    __size__: size,
  })


export default of
