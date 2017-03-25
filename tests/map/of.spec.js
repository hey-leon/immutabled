import test from 'ava'

import Symbols from '../../source/consts/symbols'
import of      from '../../source/map/of'

import { testOf } from '../helpers'



const e0 = {
  __type__: Symbols.map,
  __data__: {},
  __size__: 0,
}

test('map#of: should return map of undefined', testOf, undefined, e0, of)


const i1 = {}
const e1 = {
  __type__: Symbols.map,
  __data__: {},
  __size__: 0,
}

test('map#of: should return map of {}', testOf, i1, e1, of)



const i2 = { propOne: 'primitive' }
const e2 = {
  __type__: Symbols.map,
  __data__: { ...i2 },
  __size__: 1,
}

test('map#of: should return map of {} with props', testOf, i2, e2, of)



const i3 = { nestedOne: {} }
const e3 = {
  __type__: Symbols.map,
  __data__: { ...i3 },
  __size__: 1,
}

test('map#of: should return map of {} with nested', testOf, i3, e3, of)



const i4 = { nestedOne: {}, propOne: 'primitive' }
const e4 = {
  __type__: Symbols.map,
  __data__: { ...i4 },
  __size__: 2,
}

test('map#of: should return map of complex shape', testOf, i4, e4, of)



const i5 = of({ propOne: 'primitive' })
const e5 = {
  __type__: Symbols.map,
  __data__: { ...i5.__data__ },
  __size__: 1,
}

test('map#of: should return map of map', testOf, i5, e5, of)
