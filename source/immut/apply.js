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
}   from '../utils/is'

import { curry }         from '../utils/curry'
import { runtimeError }  from '../utils/helpers'

import type { Immut, Func } from '../consts/types'


/**
 * @param {Immut} i to apply f to
 * @param {any[]} ks of the path to apply to
 * @param {Func} f to apply
 */
export const apply: (Immut, any[], Func) => Immut | void =
  (i, [ k, ...ks ], f) => !i || !i.__data__      ? runtimeError(Error, `${k} is not an immut type`)
                        : !k                     ? f(i)
                        : isList(i.__data__[k]) ? list.set(k, i, apply(i, ks, f))
                        : isMap(i.__data__[k])  ? map.set(k, i, apply(i, ks, f))
                        : runtimeError(Error, `${k} is not an immut type`)


export default curry(apply)
