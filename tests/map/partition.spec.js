import test from 'ava'

import * as F from '../fixtures'

import partition from '../../source/map/partition'

import {
  _,
} from '../../source/utils/curry.js'

test('map.partition: should be curryable', t => {
  t.is(partition(_), partition)
})

test('map.partition: should return left and right as empty maps', t => {
  const m1 = F.map()

  const [ m2, m3 ] = partition(m1, () => true)
  t.is(m2.__size__, 0)
  t.is(m3.__size__, 0)
  t.deepEqual(m2.__data__, {})
  t.deepEqual(m3.__data__, {})
})

test('map.partition: should return all to the left', t => {
  const m1 = F.mapOfab()

  const [ m2, m3 ] =
    partition(m1, v => v === F.string1 || v === F.string2)

  t.is(m2.__size__, 2)
  t.is(m3.__size__, 0)
  t.deepEqual(m2.__data__, { a: F.string1, b: F.string2 })
  t.deepEqual(m3.__data__, {})
})

test('map.partition: should return mix of left and right', t => {
  const m1 = F.mapOfab()

  const [ m2, m3 ] =
    partition(m1, v => v === F.string1)

  t.is(m2.__size__, 1)
  t.is(m3.__size__, 1)
  t.deepEqual(m2.__data__, { a: F.string1 })
  t.deepEqual(m3.__data__, { b: F.string2 })
})
