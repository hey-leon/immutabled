import test from 'ava'

import update from '../../source/list/update'

import {
  _,
} from '../../source/utils/curry'

import * as A from '../assert'

test('listp#update: should be curryable', t => {
  t.is(update(_), update)
})


test('list#update: should update value', t => {
  const k = 0
  const v = 1

  const l1 = {
    __data__: [ v ],
    __size__: 1
  }

  const l2 = update(l1, k, (v=0) => v + 1)

  t.true(A.testRefs(l1, l2, [k]))
  t.is(l1.__data__[k], 1)
  t.is(l2.__data__[k], 2)
  t.is(l2.__size__, l1.__size__)
})


test('list#update: should update when no value already', t => {
  const k = 0

  const l1 = {
    __data__: [],
    __size__: 0
  }

  const l2 = update(l1, k, (v=0) => v + 1)

  t.true(A.testRefs(l1, l2, [k]))
  t.is(l1.__data__[k], undefined)
  t.is(l2.__data__[k], 1)
  t.is(l2.__size__, l1.__size__ + 1)
})
