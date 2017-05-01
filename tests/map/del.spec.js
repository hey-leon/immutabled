import test from 'ava'

import * as A from '../assert'
import * as F from '../fixtures'

import del from '../../source/map/del'
import {
  _,
} from '../../source/utils/curry.js'

test('map.del: should be curryable', t => {
  t.is(del(_), del)
})

test('map.del: should del member at key (member exists)', t => {
  const k  = 'a'
  const m1 = F.mapOfa()

  const m2 = del(m1, k)
  t.true(A.testRefs(m1, m2, [k]))
  t.true(A.testSize(m1, m2, -1))
  t.is(m1.__data__[k], F.currString1)
  t.is(m2.__data__[k], undefined)
})

test('map.del: should del member at key (no member)', t => {
  const k  = 'a'
  const m1 = F.map()

  const m2 = del(m1, k)
  t.true(A.testRefs(m1, m2, [k]))
  t.true(A.testSize(m1, m2, 0))
  t.is(m1.__data__[k], undefined)
  t.is(m2.__data__[k], undefined)
})
