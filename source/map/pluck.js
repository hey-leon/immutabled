// @flow
import type { Map } from '../consts/types'
import { curry }    from '../utils/curry'
import { get }      from '../immut/get'


/**
 * takes an array of keys and returns an object with the members
 * corresponding to the keys.
 *
 * @name map.pluck
 * @param  {Map}    m to pluck values of
 * @param  {Array}  ks to get values of
 * @return {Object} containing ks with value of map
 * @since 0.0.1
 */
export const pluck: (m: Map, ks: any[]) => Object =
  (m, ks) => ks.reduce((acc, k) => ({ ...acc, [k]: get(m, k) }), {})


export default curry(pluck)
