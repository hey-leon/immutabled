// @flow
import type { Immut } from '../consts/types'
import { curry }      from '../utils/curry'


/**
 * takes an immutable collection and returns
 * the raw pojo data.
 *
 * @name immut.data
 * @param  {Immut} i immutable species
 * @return {any} a reference to the immut's data
 * @since 0.0.1
 */
export const data: (i: Immut) => any =
  i => i.__data__


export default curry(data)
