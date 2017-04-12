// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'


/**
 * tests all entities against the predicate until
 * one returns true. if one returns true list.some
 * returns true else returns false.
 *
 * @name list.some
 * @param  {List} l to check if some
 * @param  {any}  f to be predicate
 * @return {bool} where the predicate passes
 * @since 0.0.1
 */
export const some: (l: List, f: Func) => boolean =
  (l, f) => Array.prototype.some.call(l.__data__, f)


export default curry(some)

