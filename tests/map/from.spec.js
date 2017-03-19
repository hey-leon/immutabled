import test from 'ava'

import Symbols from '../../source/consts/symbols'
import of      from '../../source/map/of'


/**
 * test macro
 * @param {Object} t ava assertions
 * @param {Object|Immut.Map} i input for #of
 * @param {Immut.Map} e expected output
 */
function plan(t, i, e) {
  const output = of(i)

  const data = !i          ? {}
             :  i.__data__ ? i.__data__
             :  i

  t.is(output.__type__, e.__type__)  // test the __type__
  t.is(output.__size__, e.__size__)  // test the __size__
  t.not(output.__data__, data) // test for new ref

  Object // test shallow copy
    .entries(data)
    .forEach(([k, v]) => { t.is(v, output.__data__[k]) })
}



const e0 = {
  __type__: Symbols.Map,
  __data__: {},
  __size__: 0,
}

test('map#of: should return map of undefined', plan, undefined, e0)


const i1 = {}
const e1 = {
  __type__: Symbols.Map,
  __data__: {},
  __size__: 0,
}

test('map#of: should return map of {}', plan, i1, e1)



const i2 = { propOne: 'primitive' }
const e2 = {
  __type__: Symbols.Map,
  __data__: { ...i2 },
  __size__: 1,
}

test('map#of: should return map of {} with props', plan, i2, e2)



const i3 = { nestedOne: {} }
const e3 = {
  __type__: Symbols.Map,
  __data__: { ...i3 },
  __size__: 1,
}

test('map#of: should return map of {} with nested', plan, i3, e3)



const i4 = { nestedOne: {}, propOne: 'primitive' }
const e4 = {
  __type__: Symbols.Map,
  __data__: { ...i4 },
  __size__: 2,
}

test('map#of: should return map of complex shape', plan, i4, e4)



const i5 = of({ propOne: 'primitive' })
const e5 = {
  __type__: Symbols.Map,
  __data__: { ...i5.__data__ },
  __size__: 1,
}

test('map#of: should return map of map', plan, i5, e5)
