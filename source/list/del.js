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
 * @return {List} i index to delete the value at
 * @since 0.0.3
 */
export const del: (l: List, i: number) => List =
  (l, i) => {
    const data = [ ...l.__data__ ]

    data.splice(i, 1)

    return of(data)
  }


export default curry(del)
