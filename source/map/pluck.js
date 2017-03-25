// @flow


/**
 * implementation for Map#pluck
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry }  from '../utils/curry'
import { get }    from '../immut/get'

import type { Map } from '../consts/types'


/**
 * @param {Map} m to pluck values of
 * @param {Array} ks to get values of
 * @returns {Object} containing ks with value of map
 */
export const pluck: (m: Map, ks: any[]) => Object =
  (m, ks) => ks.reduce((acc, k) => ({ ...acc, [k]: get(m, k) }), {})


export default curry(pluck)
