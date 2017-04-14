// @flow
import type { Immut, Func } from '../consts/types'
import { runtimeError }     from '../utils/helpers'
import { isList, isMap }    from '../utils/is'
import { curry }            from '../utils/curry'
import list                 from '../list'
import map                  from '../map'



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
 */
export const apply: (i: Immut, ks: any[], f: Func) => Immut | void =
  (i, [ k, ...ks ], f) =>
    isList(i)
      ? ks.length > 0
        ? list.set(i, k, apply(i.__data__[k], ks, f))
        : list.update(i, k, f)
  : isMap(i)
      ? ks.length > 0
        ? map.set(i, k, apply(i.__data__[k], ks, f))
        : map.update(i, k, f)
  : runtimeError(TypeError, 'Path does not match shape')




export default curry(apply)
