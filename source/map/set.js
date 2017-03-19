// @flow


/**
 * implementation for Map#set
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry }  from '../utils/curry'
import { update } from './update'

import type { Map } from '../consts/types'


/**
 * @param {Map} m to set value on
 * @param {any} k is the key of the value to get
 * @param {any} v to set on map
 * @returns a node a copy of the node value
 */
export const set: (m: Map, k: any, v: any) => Map =
  (m, k, v) => update(m, k, () => v)


export default curry(set)
