// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'
import { of }              from './of'


/**
 * takes a list and a comparator and returns
 * a new list sorted by the comparator.
 *
 * @name list.sort
 * @param  {List} l to sort
 * @param  {any}  f comparator
 * @return {List} sorted by the comparator
 * @since 0.0.1
 */
export const sort: (l: List, f: Func) => List =
  (l, f) => of( Array.prototype.sort.call(l.__data__, f) )


export default curry(sort)
