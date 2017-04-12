// @flow
import type { List } from '../consts/types'
import { curry }     from '../utils/curry'
import { update }    from './update'


/**
 * takes a list, an index and a value. returns
 * a new list with the value at the index set
 * as the new value.
 *
 * @name list.set
 * @param  {List} l to set value on
 * @param  {any}  k is the index of the value to get
 * @param  {any}  v to set on list
 * @return {List} a new list with the value at k set as v
 * @since 0.0.1
 */
export const set: (l: List, k: any, v: any) => List =
  (l, k, v) => update(l, k, () => v)


export default curry(set)
