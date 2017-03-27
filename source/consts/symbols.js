// @flow

import type { Symbols } from './types'


/**
 * all immutables must contain __type__, which
 * will have its own symbol on this map
 */
const symbols: Symbols = {
  list: '__immut_list__',
  map:  '__immut_map__',
}


export default symbols










/**
 * USE ES2015 SYMBOLS WHEN FLOW SUPPORTS
 */
// const symbols: { [k: string]: Symbol } = {
//   Map:  Symbol.for('__immut_map__'),
//   List: Symbol.for('__immut_list__'),
// }
