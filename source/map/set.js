// @flow


//
// implementation for Map#set
// @author Leon Pearce <leonp1991@gmail.com>
// @version 0.0.1
//


import { curry }  from '../utils/curry'
import { update } from './update'

import type { Map } from '../consts/types'


/**
 * @name map#set
 * @param   {Map} m to set value on
 * @param   {any} k is the key of the value to get
 * @param   {any} v to set on map
 * @returns {Map} an updated copy
 */
export const set: (m: Map, k: any, v: any) => Map =
  (m, k, v) => update(m, k, () => v)


export default curry(set)
