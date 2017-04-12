// @flow
import type { List, Func } from '../consts/types'
import { curry }           from '../utils/curry'


/**
 * takes a list and an accumulator and an initial value.
 * it applies the accumulator for each value in the list
 * allong with the current value from the accumulator
 * starting with the initial value
 *
 * @example
 *   const accumulator = (acc, n) => acc + n
 *   const initialVal  = 0
 *   const aList       = list.of([1, 1, 1])
 *
 *   list.fold(aList, accumulator, initialVal) // returns 3
 *
 * @name list.fold
 * @param  {List} l to fold
 * @param  {any} f accumulator
 * @param  {any} i initial accum value
 * @return {any} the final value from the accumulator
 * @since 0.0.1
 */
export const fold: (l: List, f: Func, i: any) => any =
  (l, f, i) => Array.prototype.reduce.call(l.__data__, f, i)


export default curry(fold)
