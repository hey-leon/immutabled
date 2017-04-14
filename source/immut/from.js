// @flow
//
// NOTE: from is internally known as parse
//
import { runtimeError } from '../utils/helpers'
import { curry }        from '../utils/curry'
import list             from '../list'
import map              from '../map'
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
 * takes a shape template and JSON like and parses
 * it to match the shape.
 *
 * @name immut.parse
 * @param {Object} s template of the shape
 * @param {Object} d to parse
 * @return {Immut|Leaf|void} the data parsed to match the shape
 * @since 0.0.1
 */
export const parse: (s: Shape | any, d: any) => Immut | Leaf | void =
  (s, d) => s && s.type === list.type ? ofList(s, d)
          : s && s.type === map.type  ? ofMap(s, d)
          : ofLeaf(s, d)


export const ofMap: (s: MapShape, d: Object) => Map | void =
  (s, d={}) => d === Object(d)
    ? map.of(Object.entries(s.keys).reduce((acc, [k, v]) => ({
        ...acc,
        [k]: parse(v, d[k]),
      }), {}))
    : runtimeError(TypeError, 'Shape did not match the data')


export const ofList: (s: ListShape, d: any) => List | void =
  (s, d=[]) => Array.isArray(d)
    ? list.of(d.map(_d => parse(s.item, _d)))
    : runtimeError(TypeError, 'Shape did not match the data')


export const ofLeaf: (s: any, d: any) => Leaf | void =
  (s, d) => d || d === null
    ? d
    : s


export default curry(parse)
