// @flow
import type { Immut, Func } from '../consts/types'
import { updateIn } from './updateIn'



/**
 * takes an immutable, a key array, and an updater, and
 * applies the updater function to the entity at the
 * key path.
 *
 * @name immut.apply
 * @param  {Immut} i to apply f to
 * @param  {any[]} ks of the path to apply to
 * @param  {Func}  f to apply
 * @return {Immut} the copy of the immutable with the updated value
 * @since 0.0.1
 * @deprecated since 0.0.1, to be removed in 0.1.0
 */
export const apply: (Immut, any[], Func) => Immut | void =
  (...args) => {
    console.warn(
      'apply is deprecated! please use updateIn. apply will be removed in 0.1.0.'
    )

    return updateIn(...args)
  }




export default apply
