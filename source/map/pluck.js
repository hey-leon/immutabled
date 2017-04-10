// @flow


//
// implementation for Map#pluck
// @author Leon Pearce <leonp1991@gmail.com>
// @version 0.0.1
//


import { curry }  from '../utils/curry'
import { get }    from '../immut/get'

import type { Map } from '../consts/types'


/**
 * @name map#pluck
 * @param   {Map}    m to pluck values of
 * @param   {Array}  ks to get values of
 * @returns {Object} containing ks with value of map
 */
export const pluck: (m: Map, ks: any[]) => Object =
  (m, ks) => ks.reduce((acc, k) => ({ ...acc, [k]: get(m, k) }), {})


export default curry(pluck)
