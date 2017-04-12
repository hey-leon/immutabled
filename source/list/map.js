// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'
import { of }              from './of'


/**
 * takes a list and a function and applies the function
 * to each entity in the list returning a list
 * of the updated entities.
 *
 * @name list.map
 * @param  {List} l to map
 * @param  {any} f to be mapping function
 * @return {List} of the updated entities
 * @since 0.0.1
 */
export const map: (l: List, f: Func) => List =
  (l, f) => of( Array.prototype.map.call(l.__data__, f) )


export default curry(map)
