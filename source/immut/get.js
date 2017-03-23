// @flow


/**
 * implementation for Immut#get
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry }        from '../utils/curry'
import { runtimeError } from '../utils/helpers'

import type { Immut } from '../consts/types'


/**
 * @param {Immut} i immutable species
 * @param {any}   k of member
 * @returns a node a copy of the node value
 */
export const get: (i: Immut, k: any) => any =
  (i, k) => k in i.__data__
    ? i.__data__[k]
    : runtimeError(ReferenceError, `Immut does not contain ${k}`)


export default curry(get)
