// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'


/**
 * tests all entities against the predicate, until
 * one returns false. if one returns false list.every
 * returns false, else true.
 *
 * @name list.every
 * @param  {List} l to check if every
 * @param  {Func} f to be predicate
 * @return {boolean} if predicate returns true for all entities
 * @since 0.0.1
 */
export const every: (l: List, f: Func) => boolean =
  (l, f) => Array.prototype.every.call(l.__data__, f)


export default curry(every)

