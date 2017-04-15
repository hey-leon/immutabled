// @flow
import type { List } from '../consts/types'
import { curry }     from '../utils/curry'
import { of }        from './of'


/**
 * takes a list and an index and returns a new list
 * with the entity at the index removed.
 *
 * @name list.del
 * @param  {List} l to delete value from
 * @param  {number} i index to delete the value at
 * @return {List} without value at i
 * @since 0.0.3
 */
export const del: (l: List, i: number) => List =
  (l, i) => {
    const data = [ ...l.__data__ ]

    data.splice(i, 1)

    return of(data)
  }


export default curry(del)
