// @flow
import type { Immut } from '../consts/types'
import { runtimeError }     from '../utils/helpers'
import { isList, isMap }    from '../utils/is'
import { curry }            from '../utils/curry'
import list                 from '../list'
import map                  from '../map'



/**
 * takes an immutable, a key array, and a value, and
 * applies the value to the entity at the
 * key path.
 *
 * @name immut.setIn
 * @param  {Immut} i to setIn f to
 * @param  {any[]} ks of the path to setIn to
 * @param  {Func}  f to setIn
 * @return {Immut} the copy of the immutable with the updated value
 * @since 0.0.8
 */
export const setIn: (i: Immut, ks: any[], v: any) => Immut | void =
  (i, [ k, ...ks ], v) => !i && k
    ? runtimeError(TypeError, 'Path does not match shape')

    : isList(i)
      ? ks.length > 0
        ? list.set(i, k, setIn(i.__data__[k], ks, v))
        : list.set(i, k, v)

    : isMap(i)
      ? ks.length > 0
        ? map.set(i, k, setIn(i.__data__[k], ks, v))
        : map.set(i, k, v)

    : runtimeError(TypeError, 'Path does not match shape')


export default curry(setIn)
