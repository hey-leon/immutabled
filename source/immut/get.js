// @flow


/**
 * implementation for Immut#get
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import type { Immut } from '../consts/types'


/**
 * @param {Immut} i immutable species
 * @param {any}   k of member
 * @returns a node a copy of the node value
 */
export const get: (i: Immut, k: any) => any = (i, k) => i.__data__[k]


export default curry(get)
