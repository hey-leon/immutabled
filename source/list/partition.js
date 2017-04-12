// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'
import { of }              from './of'


/**
 * takes a predicate and uses it to partition the list into a
 * list pair. for each entity if the predicate returns true
 * the entity will be in the first list, else the second.
 *
 * @name list.partition
 * @param  {List} l to partition
 * @param  {Func} f predicate
 * @return {[List, List]} pair of lists, left true, right false.
 * @since 0.0.1
 */
export const partition: (l: List, f: Func) => [ List, List ] =
  (l, f) => l.__data__.reduce(
    ([ l, r ], v, i, a) => {
      const p = f(v)

      l.__data__ = p ? [ ...l.__data__, v ] : l.__data__
      r.__data__ = p ? r.__data__ : [ ...r.__data__, v ]

      if (i === a.length - 1) {
        l.__size__ = l.__data__.length
        r.__size__ = r.__data__.length
      }

      return [ l, r ]
    },
    [ of(), of() ]
  )


export default curry(partition)
