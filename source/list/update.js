// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'
import { of }              from './of'


/**
 * takes a list, an index and an updater, and returns
 * a new list with the value at index updated by
 * the updater.
 *
 * @name list.update
 * @param  {List} l set value on
 * @param  {any}  k is the key of the value to get
 * @param  {Func} f to update value on map
 * @return {List} copy of list value a k updated by f
 * @since 0.0.1
 */
export const update: (l: List, k: any, f: Func) => List =
  (l, k, f) => {
    const data = [ ...l.__data__ ]

    data[k] = f(data[k])

    return of(data)
  }


export default curry(update)
