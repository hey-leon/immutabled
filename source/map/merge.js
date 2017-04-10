// @flow


//
// implementation for Map#merge
// author: Leon Pearce <leonp1991@gmail.com>
// version: 0.0.1
//


import { curry } from '../utils/curry'

import of from './of'

import type { Map } from '../consts/types'


/**
 * @name map#merge
 * @param   {Map} m1 to merge onto
 * @param   {Map} m2 to merge with
 * @returns {Map} of merged maps
 */
export const merge: (m1: Map, m2: Map) => Map =
  (m1, m2) => of({ ...m1.__data__, ...m2.__data__ })


export default curry(merge)
