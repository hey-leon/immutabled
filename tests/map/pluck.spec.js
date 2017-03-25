import test from 'ava'

import pluck from '../../source/map/pluck'

import {
  _
} from '../../source/utils/curry.js'


test('map#pluck: should be curryable', t => {
  t.is(pluck(_), pluck)
})


test('map#pluck: should return {} from ks === []', t => {
  const ks = []
  const m = {
    __data__: {}
  }

  const output = pluck(m, ks)

  t.deepEqual(output, {})
})


test('map#pluck: should return an Object with ks of map', t => {
  const ks = [ 'a', 'b', 'c' ]

  const m = {
    __data__: {
      a: 1,
      b: 2,
      c: 2,
    }
  }

  const { a, b, c } = pluck(m, ks)

  t.is(a, m.__data__.a)
  t.is(b, m.__data__.b)
  t.is(c, m.__data__.c)
})

test('map#pluck: should error on bad key', t => {
  const ks = [ 'a', 'b', 'c' ]

  const m = {
    __data__: {
      a: 1,
      b: 2,
    }
  }

  t.throws(() => pluck(m, ks), ReferenceError)
})
