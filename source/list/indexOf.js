// @flow
import type { List } from '../consts/types'
import { curry }     from '../utils/curry'


/**
 * takes a list and an entity and returns the index
 * of the entity in the list. if the entity does not
 * exist in the list then the return is -1.
 *
 * @name list.indexOf
 * @param  {List} l to indexOf
 * @param  {any} i to find index of
 * @return {number} the index of the entity or -1
 * @since 0.0.1
 */
export const indexOf: (l: List, i: any) => number =
  (l, i) => Array.prototype.indexOf.call(l.__data__, i)


export default curry(indexOf)
