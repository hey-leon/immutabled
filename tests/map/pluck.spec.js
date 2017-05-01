import test from 'ava'

import * as F from '../fixtures'

import pluck from '../../source/map/pluck'
import {
  _
} from '../../source/utils/curry.js'

test('map.pluck: should be curryable', t => {
  t.is(pluck(_), pluck)
})

test('map.pluck: should return {} from ks === []', t => {
  t.deepEqual(pluck(F.map(), []), {})
})

test('map.pluck: should return an Object with ks of map', t => {
  const ks = [ 'a', 'b' ]

  const m = F.mapOfab()

  const { a, b } = pluck(m, ks)
  t.is(a, m.__data__.a)
  t.is(b, m.__data__.b)
})

test('map.pluck: should error on bad key', t => {
  const ks = [ 'a', 'b', 'c' ]

  const m = F.mapOfab()
  t.throws(() => pluck(m, ks), ReferenceError)
})
