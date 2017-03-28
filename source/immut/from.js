// @flow


/**
 * implementation for Immut#from
 * @author Leon Pearce <leonp1991@gmail.com>
 */


//
// NOTE: from is internally known as parse
//


import list from '../list'
import map  from '../map'

import { curry }        from '../utils/curry'
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
  (s, d) => s && s.type === list.type ? ofList(s, d)
          : s && s.type === map.type  ? ofMap(s, d)
          : ofLeaf(s, d)


/**
 * @param {Object} s template of the shape
 * @param {Object} d to parse
 */
export const ofMap: (s: MapShape, d: Object) => Map | void =
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
export const ofList: (s: ListShape, d: any) => List | void =
  (s, d=[]) => Array.isArray(d)

      // build list items with item shape
    ? list.of(d.map(_d => parse(s.item, _d)))

      // shape miss match
    : runtimeError(TypeError, 'Shape did not match the data')


/**
 * @param {Object} s template of the shape
 * @param {Object} d to parse
 */
export const ofLeaf: (s: any, d: any) => Leaf | void =
  (s, d) => d || d === null
    ? d
    : s


export default curry(parse)
