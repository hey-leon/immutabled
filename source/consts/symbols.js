// @flow

import type { Symbols } from './types'


/**
 * all immutables must contain __type__, which
 * will have its own symbol on this map
 */
const symbols: Symbols = {
  list: '__Immut_List__',
  map:  '__Immut_Map__',
}


export default symbols










/**
 * USE ES2015 SYMBOLS WHEN FLOW SUPPORTS
 */
// const Symbols: { [k: string]: Symbol } = {
//   Map:  Symbol.for('__Immut_Map__'),
//   List: Symbol.for('__Immut_List__'),
// }
