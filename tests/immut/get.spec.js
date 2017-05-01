import test from 'ava'

import * as F from '../fixtures'

import get from '../../source/immut/get'
import {
  _,
} from '../../source/utils/curry'


test('immut.get: should be curryable', t => {
  t.is(get(_), get)
})

test('immut.get: should access string keyed member on map type', t => {
  t.is(get(F.mapOfa(), 'a'), F.string1)
})

test('immut.get: should access number keyed member on map type', t => {
  t.is(get(F.mapOf1(), 1), F.string1)
})

test('immut.get: should access index on list type', t => {
  t.is(get(F.listOf0(), 0), F.string1)
})

test('immut.get: should error on bad key of map type', t => {
t.throws(() => get(F.mapOfa(), 'b'), ReferenceError)
})

test('immut.get: should error on bad key of list type', t => {
  t.throws(() => get(F.listOf0(), 1), ReferenceError)
})
