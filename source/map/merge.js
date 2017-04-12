// @flow
import type { Map } from '../consts/types'
import { curry }    from '../utils/curry'
import of           from './of'


/**
 * merges two immutable maps. if the two maps contain a key
 * that is the same, the second maps value will be used
 *
 * @name map.merge
 * @param  {Map} m1 to merge onto
 * @param  {Map} m2 to merge with
 * @return {Map} of merged maps
 * @since 0.0.1
 */
export const merge: (m1: Map, m2: Map) => Map =
  (m1, m2) => of({ ...m1.__data__, ...m2.__data__ })


export default curry(merge)
