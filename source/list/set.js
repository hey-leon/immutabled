// @flow


/**
 * implementation for List#set
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry }  from '../utils/curry'
import { update } from './update'

import type { List } from '../consts/types'


/**
 * @param {List} l to set value on
 * @param {any} k is the key of the value to get
 * @param {any} v to set on list
 */
export const set: (l: List, k: any, v: any) => List =
  (l, k, v) => update(l, k, () => v)


export default curry(set)
