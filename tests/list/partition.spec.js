import test from 'ava'

import partition from '../../source/list/partition'

import {
  _,
} from '../../source/utils/curry.js'

test('list#partition: should be curryable', t => {
  t.is(partition(_), partition)
})


test('list#partition: should return left and right as empty lists', t => {
  const l1 = {
    __data__: [],
    __size__: 0,
  }

  const [ l2, l3 ] = partition(l1, () => true)

  t.is(l2.__size__, 0)
  t.is(l3.__size__, 0)
  t.deepEqual(l2.__data__, [])
  t.deepEqual(l3.__data__, [])
})

test('list#partition: should return all to the left', t => {
  const l1 = {
    __size__: 3,
    __data__: [
      1,
      2,
      3,
    ]
  }

  const [ l2, l3 ] = partition(l1, v => v > 0)


  t.is(l2.__size__, 3)
  t.is(l3.__size__, 0)
  t.deepEqual(l2.__data__, [ 1, 2, 3 ])
  t.deepEqual(l3.__data__, [])
})


test('list#partition: should return mix of left and right', t => {
  const l1 = {
    __size__: 3,
    __data__: [
      1,
      2,
      -1,
    ]
  }

  const [ l2, l3 ] = partition(l1, v => v < 0)


  t.is(l2.__size__, 1)
  t.is(l3.__size__, 2)
  t.deepEqual(l2.__data__, [ -1 ])
  t.deepEqual(l3.__data__, [ 1, 2 ])
})
