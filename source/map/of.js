// @flow
import type { Map } from '../consts/types'
import symbols      from '../consts/symbols'


/**
 * constructs an immutable map from a map like structure.
 *
 * @name map.of
 * @param  {Map|Object} s map like structure
 * @return {Map} immutable map
 * @since 0.0.1
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
