// @flow


/**
 * implementation for List#push
 * @author Leon Pearce <leonp1991@gmail.com>
 */


import { of }    from './of'
import { curry } from '../utils/curry'

import type { List } from '../consts/types'


/**
 * @param {List}  l push value on
 * @param {any}  v to push
 */
export const push: (l: List, v: any) => List =
  (l, v) => of([ ...l.__data__, v ])


export default curry(push)
