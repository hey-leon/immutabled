import test from 'ava'

import * as F from '../fixtures'

import merge from '../../source/map/merge'
import {
  _,
} from '../../source/utils/curry'


test('map.merge: should be curryable', t => {
  t.is(merge(_), merge)
})

test('map.merge: should merge value', t => {
  const m1 = F.mapOfa()
  const m2 = F.mapOfbc()

  const m3 = merge(m1, m2)
  t.not(m3, m1)
  t.not(m3, m2)
  t.not(m3.__data__, m1.__data__)
  t.not(m3.__data__, m2.__data__)
  t.is(m3.__size__, 3)
  t.deepEqual(m3.__data__, {
    a: F.string1,
    b: F.string3,
    c: F.string2,
  })
  t.deepEqual(Object.keys(m3.__data__), [
    ...new Set([
      ...Object.keys(m1.__data__),
      ...Object.keys(m2.__data__)
    ])
  ])
})

test('map.merge: should merge value overwriting m1', t => {
  const m1 = F.mapOfbc()
  const m2 = F.mapOfab()

  const m3 = merge(m1, m2)
  t.not(m3, m1)
  t.not(m3, m2)
  t.not(m3.__data__, m1.__data__)
  t.not(m3.__data__, m2.__data__)
  t.is(m3.__size__, 3)
  t.deepEqual(m3.__data__, {
    a: F.string1,
    b: F.string2,
    c: F.string2,
  })
  t.deepEqual(Object.keys(m3.__data__), [
    ...new Set([
      ...Object.keys(m1.__data__),
      ...Object.keys(m2.__data__)
    ])
  ])
})
