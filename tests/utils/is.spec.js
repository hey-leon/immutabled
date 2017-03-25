import test from 'ava'

import symbols from '../../source/consts/symbols'

import {
  isList,
  isMap,
  isArray,
  isObject,
  isPrimitive,
} from '../../source/utils/is'


test('is#list: should only return true for list', t => {
  t.false(isList())
  t.false(isList(null))
  t.false(isList(1))
  t.false(isList(''))
  t.false(isList(NaN))
  t.false(isList([]))
  t.false(isList({}))
  t.false(isList({ __type__: symbols.map }))
  t.true(isList({ __type__: symbols.list }))
})


test('is#map: should only return true for map', t => {
  t.false(isMap())
  t.false(isMap(null))
  t.false(isMap(1))
  t.false(isMap(''))
  t.false(isMap(NaN))
  t.false(isMap([]))
  t.false(isMap({}))
  t.false(isMap({ __type__: symbols.list }))
  t.true(isMap({ __type__: symbols.map }))
})


test('is#array: should only return true for array', t => {
  t.false(isArray())
  t.false(isArray(null))
  t.false(isArray(1))
  t.false(isArray(''))
  t.false(isArray(NaN))
  t.false(isArray({}))
  t.false(isArray({ __type__: symbols.list }))
  t.false(isArray({ __type__: symbols.map }))
  t.true(isArray([]))
})


test('is#object: should only return true for object', t => {
  t.false(isObject())
  t.false(isObject(null))
  t.false(isObject(1))
  t.false(isObject(''))
  t.false(isObject(NaN))
  t.false(isObject([]))
  t.false(isObject({ __type__: symbols.list }))
  t.false(isObject({ __type__: symbols.map }))
  t.true(isObject({}))
})


test('is#primitive: should only return true for primitive', t => {
  t.false(isPrimitive())
  t.false(isPrimitive(null))
  t.false(isPrimitive([]))
  t.false(isPrimitive({}))
  t.false(isPrimitive({ __type__: symbols.list }))
  t.false(isPrimitive({ __type__: symbols.map }))
  t.true(isPrimitive(1))
  t.true(isPrimitive(''))
  t.true(isPrimitive(NaN))
})
