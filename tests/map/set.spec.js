import test from 'ava'

import * as A from '../assert'
import * as F from '../fixtures'

import set from '../../source/map/set'
import {
  _,
} from '../../source/utils/curry'

test('map.set: should be curryable', t => {
  t.is(set(_), set)
})

test('map.set: should set new value', t => {
  const k = 'a'
  const m1 = F.map()

  const m2 = set(m1, k, F.string1)
  t.true(A.testRefs(m1, m2, [k]))
  t.is(m1.__data__[k], undefined)
  t.is(m2.__data__[k], F.string1)
  t.true(A.testSize(m1, m2, 1))
})

test('map.set: should overwrite value', t => {
  const k = 'a'
  const m1 = F.mapOfa()

  const m2 = set(m1, k, F.string4)
  t.true(A.testRefs(m1, m2, [k]))
  t.is(m1.__data__[k], F.string1)
  t.is(m2.__data__[k], F.string4)
  t.true(A.testSize(m1, m2, 0))
})
