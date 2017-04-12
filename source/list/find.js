// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'


/**
 * takes a list and a predicate and returns the first item
 * in the list to pass the predicate. if no item passes
 * the predicate the return is null.
 *
 * @name list.find
 * @param  {List} l to find item in
 * @param  {any}  f to be predicate
 * @return {any|null} the first item to pass the predicate or null
 * @since 0.0.1
 */
export const find: (l: List, f: Func) => any | null =
  (l, f) => Array.prototype.find.call(l.__data__, f)


export default curry(find)
