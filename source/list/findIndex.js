// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'


/**
 * takes a list and a predicate and returns the index of
 * first item in the list to pass the predicate.
 * if no item passes the predicate the return is -1.
 *
 * @name list.findIndex
 * @param  {List} l to find index in
 * @param  {any}  f to be predicate
 * @return {number} the first item to pass the predicate or -1
 * @since 0.0.1
 */
export const findIndex: (l: List, f: Func) => number =
  (l, f) => Array.prototype.findIndex.call(l.__data__, f)


export default curry(findIndex)
