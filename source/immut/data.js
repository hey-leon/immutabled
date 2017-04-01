// @flow


/**
 * implementation for Immut#data
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import type { Immut } from '../consts/types'


/**
 * @param {Immut} i immutable species
 * @returns a reference to the immut's data
 */
export const data: (i: Immut) => any =
  i => i.__data__


export default curry(data)
