// @flow


/**
 * implementation for Map#merge
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { curry } from '../utils/curry'

import of from './of'

import type { Map } from '../consts/types'


/**
 * @param {Map} m1 to merge
 * @param {Map} m2 to merge
 */
export const merge: (m1: Map, m2: Map) => Map =
  (m1, m2) => of({ ...m1.__data__, ...m2.__data__ })


export default curry(merge)
