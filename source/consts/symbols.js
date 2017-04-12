// @flow

import type { Symbols } from './types'


/**
 * @type {Symbols} symbols of all immutabled types
 * @since 0.0.1
 */
const symbols: Symbols = {
  list: '__immut_list__',
  map:  '__immut_map__',
}


export default symbols


//
// USE ES2015 SYMBOLS WHEN FLOW SUPPORTS
//
// const symbols: { [k: string]: Symbol } = {
//   Map:  Symbol.for('__immut_map__'),
//   List: Symbol.for('__immut_list__'),
// }
