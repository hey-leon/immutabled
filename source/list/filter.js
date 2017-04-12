// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'
import { of }              from './of'


/**
 * takes a list and a predicate and returns a new list consisting
 * of the elements which pass the predicate.
 *
 * @name list.filter
 * @param  {List} l to filter
 * @param  {any} f to be predicate
 * @return {List} of elements that pass the predicate
 * @since 0.0.1
 */
export const filter: (l: List, f: Func) => List =
  (l, f) => of( Array.prototype.filter.call(l.__data__, f) )


export default curry(filter)
