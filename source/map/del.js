// @flow
import type { Map } from '../consts/types'
import { curry }    from '../utils/curry'
import { of }       from './of'


/**
 * takes a map and a key and returns a new map
 * with the entity at the key removed.
 *
 * @name map.del
 * @param  {Map} m to delete value from
 * @param  {any} k key to delete the value at
 * @return {Map} copy of m without value at k
 * @since 0.0.3
 */
export const del: (m: Map, k: any) => Map =
  (m, k) => {
    const m2 = of(m)

    m2.__size__ = k in m.__data__
      ? m.__size__ - 1
      : m.__size__

    delete m2.__data__[k]

    return m2
  }


export default curry(del)
