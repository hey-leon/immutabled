// @flow
import type { List } from '../consts/types'
import { curry }     from '../utils/curry'


/**
 * is a predicate for whether an entity exists in a list
 *
 * @name list.has
 * @param  {List} l to search in
 * @param  {any} v to be predicate
 * @return {bool} whether an entity exists in the list
 * @since 0.0.1
 */
export const has: (l: List, v: any) => boolean =
  (l, v) => Array.prototype.includes.call(l.__data__, v)


export default curry(has)
