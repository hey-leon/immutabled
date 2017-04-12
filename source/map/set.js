// @flow
import type { Map } from '../consts/types'
import { curry }    from '../utils/curry'
import { update }   from './update'


/**
 * takes a key and a value and sets the key on the map
 * with the value.
 *
 * @name map.set
 * @param  {Map} m to set value on
 * @param  {any} k is the key of the value to get
 * @param  {any} v to set on map
 * @return {Map} an updated copy
 * @since 0.0.1
 */
export const set: (m: Map, k: any, v: any) => Map =
  (m, k, v) => update(m, k, () => v)


export default curry(set)
