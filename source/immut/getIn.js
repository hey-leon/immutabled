// @flow
import type { Immut }   from '../consts/types'
import { curry }        from '../utils/curry'
import { get }          from './get'
import { runtimeError } from '../utils/helpers'


/**
 * takes an immutable, a key array, and returns the member nested at
 * the key
 *
 * @name immut.getIn
 * @param  {Immut} i to get nested member in
 * @param  {any[]} ks of the path to get member at
 * @return {any} the member at the key path
 * @since 0.0.10
 */
export const getIn: (i: Immut, ks: any[]) => any | void =
  (i, [ k, ...ks ]) => i
    ? k !== undefined
      ? getIn(get(i, k), ks)
      : i
    : runtimeError(TypeError, 'Path does not match shape')


export default curry(getIn)
