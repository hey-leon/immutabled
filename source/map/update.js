// @flow
import type { Map, Func } from '../consts/types'
import { curry }          from '../utils/curry'
import symbols            from '../consts/symbols'


/**
 * takes a key and an updater fn. if the key exists on the map
 * the current value the updater fn is called with the value,
 * else with no params. whatever the updater returns is
 * set as the new value on the map for the key.
 *
 * @name map.update
 * @param  {Map}  m to set value on
 * @param  {any}  k is the key of the value to get
 * @param  {Func} f to update value on map
 * @return {Map}  an updated copy
 * @since 0.0.1
 */
export const update: (m: Map, k: any, f: Func) => Map =
  (m, k, f) => ({
    __type__: symbols.map,
    __size__: m.__data__[k] ? m.__size__ : m.__size__ + 1,
    __data__: {
      ...m.__data__, [k]: f(m.__data__[k]),
    },
  })


export default curry(update)
