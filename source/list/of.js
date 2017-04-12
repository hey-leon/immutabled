// @flow
import type { List } from '../consts/types'
import symbols       from '../consts/symbols'


/**
 * takes a list like type and constructs a new
 * list.
 *
 * @name list.of
 * @param  {any[]|List} s of data to build list from
 * @return {List}
 * @since 0.0.1
 */
export const of: (s?: List | any[]) => List =
  (s=[]) => Array.isArray(s)
          ? build([ ...s ], s.length)
          : build([ ...s.__data__ ], s.__size__)


export const build: (data: any[], size: number) => any =
  (data, size) => ({
    __type__: symbols.list,
    __data__: data,
    __size__: size,
  })


export default of
