// @flow
import type { Map, Func } from '../consts/types'
import { curry }          from '../utils/curry'
import of                 from './of'


/**
 * takes a predicate and uses it to partition the map into a
 * map pair. for each entity if the predicate returns true
 * the entity will be in the first map, else the second.
 *
 * @name map.partition
 * @param  {Map}  m map to partition
 * @param  {Func} f predicate
 * @return {[Map, Map]} pair of maps, left true, right false
 * @since 0.0.1
 */
export const partition: (m: Map, f: Func) => [ Map, Map ] =
  (m, f) => Object.entries(m.__data__).reduce(
    ([ l, r ], [ k, e ], i, a) => {
      const p = f(e)

      l.__data__ = p ? { ...l.__data__, [k]: e } : l.__data__
      r.__data__ = p ? r.__data__ : { ...r.__data__, [k]: e }

      if (i === a.length - 1) {
        l.__size__ = Object.keys(l.__data__).length
        r.__size__ = Object.keys(r.__data__).length
      }

      return [ l, r ]
    },
    [ of(), of() ]
  )


export default curry(partition)
