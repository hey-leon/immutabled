import test from 'ava'

import * as A from '../assert'
import * as F from '../fixtures'

import updateIn from '../../source/immut/updateIn'
import {
  _,
} from '../../source/utils/curry.js'

test('immut.updateIn: should be curryable', t => {
  t.is(updateIn(_), updateIn)
})

test('immut.updateIn: should update (already set) member on map', t => {
  const path = [ 'a' ]
  const i1 = F.mapOfa()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.is(i2.__data__.a, F.string1 + F.string4)
})

test('immut.updateIn: should update (unset) member on map', t => {
  const path = [ 'a' ]
  const i1 = F.map()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 1))
  t.is(i2.__data__.a, undefined + F.string4)
})

test('immut.updateIn: should update (already set) entity in list', t => {
  const path = [ 0 ]
  const i1 = F.listOf0()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.is(i2.__data__[0], F.string1 + F.string4)
})

test('immut.updateIn: should update (unset) entity in list', t => {
  const path = [ 0 ]
  const i1 = F.list()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 1))
  t.is(i2.__data__[0], undefined + F.string4)
})

test('immut.updateIn: should update (already set) nested member on (map->map)', t => {
  const path = [ 'b', 'a' ]
  const i1 = F.mapOfMapsA()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.true(A.testSize(i1.__data__.b, i2.__data__.b, 0))
  t.is(i2.__data__.b.__data__.a, F.string1 + F.string4)
})

test('immut.updateIn: should update (unset) nested member on (map->map)', t => {
  const path = [ 'b', 'a' ]
  const i1 = F.mapOfMaps()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.true(A.testSize(i1.__data__.b, i2.__data__.b, 1))
  t.is(i2.__data__.b.__data__.a, undefined + F.string4)
})

test('immut.updateIn: should update (already set) nested entity in (list->list)', t => {
  const path = [ 0, 0 ]
  const i1 = F.listOfLists0()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.true(A.testSize(i1.__data__[0], i2.__data__[0], 0))
  t.is(i2.__data__[0].__data__[0], F.string1 + F.string4)
})

test('immut.updateIn: should update (unset) nested entity in (list->list)', t => {
  const path = [ 0, 0 ]
  const i1 = F.listOfLists()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.true(A.testSize(i1.__data__[0], i2.__data__[0], 1))
  t.is(i2.__data__[0].__data__[0], undefined + F.string4)
})

test('immut.updateIn: should update (already set) nested member on (map->list)', t => {
  const path = [ 'b', 0 ]
  const i1 = F.mapOfLists1()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.true(A.testSize(i1.__data__.b, i2.__data__.b, 0))
  t.is(i2.__data__.b.__data__[0], F.string1 + F.string4)
})

test('immut.updateIn: should update (unset) nested member on (map->list)', t => {
  const path = [ 'b', 0 ]
  const i1 = F.mapOfLists0()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.true(A.testSize(i1.__data__.b, i2.__data__.b, 1))
  t.is(i2.__data__.b.__data__[0], undefined + F.string4)
})

test('immut.updateIn: should update (already set) nested member on (list->map)', t => {
  const path = [ 0, 'a' ]
  const i1 = F.listOfMaps1()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.true(A.testSize(i1.__data__[0], i2.__data__[0], 0))
  t.is(i2.__data__[0].__data__.a, F.string1 + F.string4)
})

test('immut.updateIn: should update (unset) nested member on (list->map)', t => {
  const path = [ 0, 'a' ]
  const i1 = F.listOfMaps0()

  const i2 = updateIn(i1, path, f => f + F.string4)
  t.true(A.testRefs(i1, i2, path))
  t.true(A.testSize(i1, i2, 0))
  t.true(A.testSize(i1.__data__[0], i2.__data__[0], 1))
  t.is(i2.__data__[0].__data__.a, undefined + F.string4)
})

test('immut.updateIn: should error if data type is not an immut', t => {
  t.throws(() => updateIn({}, [ 'p' ], f => f), TypeError)
})

test('immut.updateIn: should error if immut does not contain key', t => {
  t.throws(() => updateIn({ __data__: {} }, [ 'p' ], f => f), TypeError)
})
