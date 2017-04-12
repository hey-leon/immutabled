// @flow
import type { List } from '../consts/types'
import { curry }     from '../utils/curry'
import { of }        from './of'


/**
 * takes two immutable lists and returns a new combined
 * list. list two is concatenated to the end of list one.
 *
 * @name list.concat
 * @param  {List} l1 to concat
 * @param  {any}  l2 to be predicate
 * @return {List} a new list of combined l1 && l2.
 * @since 0.0.1
 */
export const concat: (l1: List, l2: List) => List =
  (l1, l2) => of( Array.prototype.concat.call(l1.__data__, l2.__data__) )


export default curry(concat)
