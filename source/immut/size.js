// @flow
import type { Immut } from '../consts/types'


/**
 * takes an immutable and returns the size of the
 * collection.
 *
 * @name immut.size
 * @param  {Immut} i to find size of
 * @return {number} size of immutable collection
 * @since 0.0.1
 */
export const size: (i: Immut) => number = i => i.__size__


export default size
