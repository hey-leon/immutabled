import test from 'ava'

import * as A from '../assert'
import * as F from '../fixtures'

import update from '../../source/map/update'

import {
  _,
} from '../../source/utils/curry'

test('map.update: should be curryable', t => {
  t.is(update(_), update)
})

test('map.update: should update (already set) value', t => {
  const k = 'a'
  const m1 = F.mapOfa()

  const m2 = update(m1, k, f => f + F.nextString1)
  t.true(A.testRefs(m1, m2, [k]))
  t.is(m1.__data__[k], F.currString1)
  t.is(m2.__data__[k], F.currString1 + F.nextString1)
  t.true(A.testSize(m1, m2, 0))
})

test('map.update: should update (unset) value', t => {
  const k = 'a'
  const m1 = F.map()

  const m2 = update(m1, k, f => f + F.nextString1)
  t.true(A.testRefs(m1, m2, [k]))
  t.is(m1.__data__[k], undefined)
  t.is(m2.__data__[k], undefined + F.nextString1)
  t.true(A.testSize(m1, m2, 1))
})
