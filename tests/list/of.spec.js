import test from 'ava'

import Symbols from '../../source/consts/symbols'
import of      from '../../source/list/of'

import { testOf } from '../helpers'



const e0 = {
  __type__: Symbols.list,
  __data__: [],
  __size__: 0,
}

test('list#of: should return list of undefined', testOf, undefined, e0, of)


const i1 = []
const e1 = {
  __type__: Symbols.list,
  __data__: [],
  __size__: 0,
}

test('list#of: should return list of {}', testOf, i1, e1, of)



const i2 = [ 'primitive' ]
const e2 = {
  __type__: Symbols.list,
  __data__: [ ...i2 ],
  __size__: 1,
}

test('list#of: should return list of {} with props', testOf, i2, e2, of)



const i3 = [ {} ]
const e3 = {
  __type__: Symbols.list,
  __data__: [ ...i3 ],
  __size__: 1,
}

test('list#of: should return list of {} with nested', testOf, i3, e3, of)



const i4 = [ {}, 'primitive' ]
const e4 = {
  __type__: Symbols.list,
  __data__: [ ...i4 ],
  __size__: 2,
}

test('list#of: should return list of complex shape', testOf, i4, e4, of)



const i5 = of([ 'primitive' ])
const e5 = {
  __type__: Symbols.list,
  __data__: [ ...i5.__data__ ],
  __size__: 1,
}

test('list#of: should return list of list', testOf, i5, e5, of)
