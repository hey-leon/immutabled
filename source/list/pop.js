// @flow
import type { List } from '../consts/types'
import { curry }     from '../utils/curry'
import { of }        from './of'


/**
 * takes a list and returns a new list minus the last entity
 *
 * @name list.pop
 * @param  {List} l push value on
 * @return {List} with all values same as list minus the last entity
 * @since 0.0.1
 */
export const pop: (l: List) => List =
  l => {
    const data = [ ...l.__data__ ]

    data.pop()

    return of(data)
  }


export default curry(pop)
