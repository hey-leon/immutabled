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
  t.is(get(F.mapOf1(), 'a'), F.currString1)
})

test('immut.get: should access number keyed member on map type', t => {
  t.is(get(F.mapOf1n(), 1), F.currString1)
})

test('immut.get: should access index on list type', t => {
  t.is(get(F.listOf1(), 0), F.currString1)
})

test('immut.get: should error on bad key of map type', t => {
t.throws(() => get(F.mapOf1(), 'b'), ReferenceError)
})

test('immut.get: should error on bad key of list type', t => {
  t.throws(() => get(F.listOf1(), 1), ReferenceError)
})
