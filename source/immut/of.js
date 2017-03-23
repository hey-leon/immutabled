// @flow

/**
 * implementation for Immut#parse
 * @author Leon Pearce <leonp1991@gmail.com>
 */

import list from '../list'
import map  from '../map'

import { runtimeError } from '../utils/helpers'

import type {
  Immut,
  List,
  Map,
  Shape,
  MapShape,
  ListShape,
  Leaf,
} from '../consts/types'


/**
 * @param {Object} s template of the shape
 * @param {Object} d to parse
 */
export const parse: (s: Shape | any, d: any) => Immut | Leaf | void =
  (s, d) => s.type === list.type ? parseList(s, d)
          : s.type === map.type  ? parseMap(s, d)
          : parseLeaf(s, d)


/**
 * @param {Object} s template of the shape
 * @param {Object} d to parse
 */
export const parseMap: (s: MapShape | any, d: Object) => Map | void =
  (s, d={}) => d === Object(d)

               // parse keys of map
             ? map.of(Object.entries(s.keys).reduce((acc, [k, v]) => ({
                 ...acc,
                 [k]: parse(v, d[k]),
               }), {}))

               // shape miss match
             : runtimeError(TypeError, 'Shape did not match the data')


/**
 * @param {Object} s template of the shape
 * @param {Object} d to parse
 */
export const parseList: (s: ListShape, d: any) => List | void =
  (s, d=[]) => Array.isArray(d)

               // build list items with item shape
             ? list.of(d.map((_d) => parse(s.item, _d)))

               // shape miss match
             : runtimeError(TypeError, 'Shape did not match the data')


/**
 * @param {Object} s template of the shape
 * @param {Object} d to parse
 */
export const parseLeaf: (s: any, d: any) => Leaf | void =
  (s, d) => d ? d : s




export default parse
