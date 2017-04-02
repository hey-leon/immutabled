import test from 'ava'

import filter from '../../source/list/filter'

import {
  _,
} from '../../source/utils/curry.js'

test('list#filter: should be curryable', t => {
  t.is(filter(_), filter)
})


test('list#filter: should return empty list', t => {
  const l1 = {
    __data__: [],
    __size__: 0,
  }

  const l2 = filter(l1, () => true)

  t.not(l1.__data__, l2.__data__)
  t.is(l2.__size__, 0)
  t.deepEqual(l2.__data__, [])
})

test('list#filter: should return all items', t => {
  const l1 = {
    __size__: 3,
    __data__: [
      1,
      2,
      3,
    ]
  }

  const l2 = filter(l1, v => v > 0)

  t.not(l1.__data__, l2.__data__)
  t.is(l2.__size__, 3)
  t.deepEqual(l2.__data__, [ 1, 2, 3 ])
})


test('list#filter: should return some items', t => {
  const l1 = {
    __size__: 3,
    __data__: [
      1,
      2,
      -1,
    ]
  }

  const l2 = filter(l1, v => v < 0)

  t.not(l1.__data__, l2.__data__)
  t.is(l2.__size__, 1)
  t.deepEqual(l2.__data__, [ -1 ])
})
