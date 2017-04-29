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
 * @name immut.updateIn
 * @param  {Immut} i to updateIn f to
 * @param  {any[]} ks of the path to updateIn to
 * @param  {Func}  f to updateIn
 * @return {Immut} the copy of the immutable with the updated value
 * @since 0.0.8
 */
export const updateIn: (i: Immut, ks: any[], f: Func) => Immut | void =
  (i, [ k, ...ks ], f) =>
    isList(i)
      ? ks.length > 0
        ? list.set(i, k, updateIn(i.__data__[k], ks, f))
        : list.update(i, k, f)
  : isMap(i)
      ? ks.length > 0
        ? map.set(i, k, updateIn(i.__data__[k], ks, f))
        : map.update(i, k, f)
  : runtimeError(TypeError, 'Path does not match shape')




export default curry(updateIn)
