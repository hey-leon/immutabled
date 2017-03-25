import test from 'ava'

import merge from '../../source/map/merge'

import {
  _,
} from '../../source/utils/curry'


test('map#merge: should be curryable', t => {
  t.is(merge(_), merge)
})


test('map#merge: should merge value', t => {
  const m1 = { __data__: { p: 1 }, __size__: 1 }
  const m2 = { __data__: { b: 1 }, __size__: 1 }

  const m3 = merge(m1, m2)
  t.not(m3, m1)
  t.not(m3, m2)
  t.not(m3.__data__, m1.__data__)
  t.not(m3.__data__, m2.__data__)
  t.deepEqual(Object.keys(m3.__data__), [
    ...new Set([
      ...Object.keys(m1.__data__),
      ...Object.keys(m2.__data__)
    ])
  ])
  t.deepEqual(m3.__data__, { p: 1, b: 1 })
  t.is(m3.__size__, 2)
})


test('map#merge: should merge value overwriting m1', t => {
  const m1 = { __data__: { a: 1, b: 3 }, __size__: 1 }
  const m2 = { __data__: { b: 1, c: 9 }, __size__: 1 }

  const m3 = merge(m1, m2)
  t.not(m3, m1)
  t.not(m3, m2)
  t.not(m3.__data__, m1.__data__)
  t.not(m3.__data__, m2.__data__)
  t.deepEqual(Object.keys(m3.__data__), [
    ...new Set([
      ...Object.keys(m1.__data__),
      ...Object.keys(m2.__data__)
    ])
  ])
  t.deepEqual(m3.__data__, { a: 1, b: 1, c: 9 })
  t.is(m3.__size__, 3)
})
