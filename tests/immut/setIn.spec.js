import test from 'ava'

import * as F from '../fixtures'
import * as A from '../assert'

import setIn from '../../source/immut/setIn'
import {
  _,
} from '../../source/utils/curry'


test('immut.setIn: should be curryable', t => {
  t.is(setIn(_), setIn)
})

test('immut.setIn: should set (unset) member in map type', t => {
  const ks = [ 'a' ]
  const i1 = F.map() // has no member on `a`

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]], undefined)
  t.is(i2.__data__[ks[0]], F.nextString1)
  t.true(A.testSize(i1, i2, 1))
})

test('immut.setIn: should set (already set) member in map type', t => {
  const ks = [ 'a' ]
  const i1 = F.mapOfa() // has member `a` already

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]], F.currString1)
  t.is(i2.__data__[ks[0]], F.nextString1)
  t.true(A.testSize(i1, i2, 0))
})

test('immut.setIn: should set (unset) entity in list type', t => {
  const ks = [ 0 ]
  const i1 = F.list() // has no entity on `0`

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]], undefined)
  t.is(i2.__data__[ks[0]], F.nextString1)
  t.true(A.testSize(i1, i2, 1))
})

test('immut.setIn: should set (already set) entity in list type', t => {
  const ks = [ 0 ]
  const i1 = F.listOf0() // has entity `0` already

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]], F.currString1)
  t.is(i2.__data__[ks[0]], F.nextString1)
  t.true(A.testSize(i1, i2, 0))
})

test('immut.setIn: should set (unset) nested member in map type', t => {
  const ks = [ 'b', 'a' ]
  const i1 = F.mapOfMaps() // has no member on `b -> a`

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]].__data__[ks[1]], undefined)
  t.is(i2.__data__[ks[0]].__data__[ks[1]], F.nextString1)
  t.true(A.testSize(i1.__data__[ks[0]], i2.__data__[ks[0]], 1))
})

test('immut.setIn: should set (already set) nested member in map type', t => {
  const ks = [ 'b', 'a' ]
  const i1 = F.mapOfMapsA() // has member `b -> a` already

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]].__data__[ks[1]], F.currString1)
  t.is(i2.__data__[ks[0]].__data__[ks[1]], F.nextString1)
  t.true(A.testSize(i1.__data__[ks[0]], i2.__data__[ks[0]], 0))
})

test('immut.setIn: should set (unset) nested entity in list type', t => {
  const ks = [ 0, 0 ]
  const i1 = F.listOfLists() // has no entity on `0 -> 0`

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]].__data__[ks[1]], undefined)
  t.is(i2.__data__[ks[0]].__data__[ks[1]], F.nextString1)
  t.true(A.testSize(i1.__data__[ks[0]], i2.__data__[ks[0]], 1))
})

test('immut.setIn: should set (already set) nested entity in list type', t => {
  const ks = [ 0, 0 ]
  const i1 = F.listOfLists0() // has entity `0 -> 0` already

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]].__data__[ks[1]], F.currString1)
  t.is(i2.__data__[ks[0]].__data__[ks[1]], F.nextString1)
  t.true(A.testSize(i1.__data__[ks[0]], i2.__data__[ks[0]], 0))
})

test('immut.setIn: should set (unset) nested entity in mixed type (map->list)', t => {
  const ks = [ 'b', 0 ]
  const i1 = F.mapOfLists0() // has no entity at `b -> 0`

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]].__data__[ks[1]], undefined)
  t.is(i2.__data__[ks[0]].__data__[ks[1]], F.nextString1)
  t.true(A.testSize(i1.__data__[ks[0]], i2.__data__[ks[0]], 1))
})

test('immut.setIn: should set (already set) nested entity in mixed type (map->list)', t => {
  const ks = [ 'b', 0 ]
  const i1 = F.mapOfLists1() // has entity `b -> 0` already

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]].__data__[ks[1]], F.currString1)
  t.is(i2.__data__[ks[0]].__data__[ks[1]], F.nextString1)
  t.true(A.testSize(i1.__data__[ks[0]], i2.__data__[ks[0]], 0))
})

test('immut.setIn: should set (unset) nested entity in mixed type (list->map)', t => {
  const ks = [ 0, 'a' ]
  const i1 = F.listOfMaps0() // has no member at `0 -> a`

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]].__data__[ks[1]], undefined)
  t.is(i2.__data__[ks[0]].__data__[ks[1]], F.nextString1)
  t.true(A.testSize(i1.__data__[ks[0]], i2.__data__[ks[0]], 1))
})

test('immut.setIn: should set (already set) nested entity in mixed type (list->map)', t => {
  const ks = [ 0, 'a' ]
  const i1 = F.listOfMaps1() // has member at `0 -> a` already

  const i2 = setIn(i1, ks, F.nextString1)
  t.true(A.testRefs(i1, i2, ks))
  t.is(i1.__data__[ks[0]].__data__[ks[1]], F.currString1)
  t.is(i2.__data__[ks[0]].__data__[ks[1]], F.nextString1)
  t.true(A.testSize(i1.__data__[ks[0]], i2.__data__[ks[0]], 0))
})

test('immut.setIn: should error on bad key for nested map type', t => {
  const ks = [ 'a', 'a' ]
  const i1 = F.mapOfMapsA() // has no member on `a`
  t.throws(() => setIn(i1, ks, F.nextString1), TypeError)
})

test('immut.setIn: should error on bad index for nested list type', t => {
  const ks = [ 1, 0 ]
  const i1 = F.listOfLists0() // has no entity at `1`
  t.throws(() => setIn(i1, ks, F.nextString1), TypeError)
})

test('immut.setIn: should error on bad index for nested mixed type (map->list)', t => {
  const ks = [ 'a', 0 ]
  const i1 = F.mapOfLists1() // has no member on `a`
  t.throws(() => setIn(i1, ks, F.nextString1), TypeError)
})

test('immut.setIn: should error on bad index for nested mixed type (list->map)', t => {
  const ks = [ 1, 'a' ]
  const i1 = F.listOfMaps1() // has no entity at `1`
  t.throws(() => setIn(i1, ks, F.nextString1), TypeError)
})
