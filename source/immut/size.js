// @flow


/**
 * implementation for Immut#size
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import type { Immut } from '../consts/types'


/**
 * @param {Immut} i to find size of
 */
export const size: (i: Immut) => number = i => i.__size__


export default size
