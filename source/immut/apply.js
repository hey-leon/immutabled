// @flow


/**
 * implementation for Immut#apply
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import list from '../list'
import map  from '../map'

import {
  isList,
  isMap,
} from '../utils/is'

import { curry }         from '../utils/curry'
import { runtimeError }  from '../utils/helpers'

import type { Immut, Func } from '../consts/types'


/**
 * @param {Immut} i to apply f to
 * @param {any[]} ks of the path to apply to
 * @param {Func} f to apply
 */
export const apply: (i: Immut, any[], f: Func) => Immut | void =
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
