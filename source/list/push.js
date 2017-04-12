// @flow
import type { List } from '../consts/types'
import { curry }     from '../utils/curry'
import { of }        from './of'


/**
 * takes a list and a value and returns a new list
 * with the value at the end
 *
 * @name list.push
 * @param  {List} l push value on
 * @param  {any}  v to push
 * @return {List} a list copy with the value at the end
 * @since 0.0.1
 */
export const push: (l: List, v: any) => List =
  (l, v) => of([ ...l.__data__, v ])


export default curry(push)
