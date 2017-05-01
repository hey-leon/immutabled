import test from 'ava'

import set from '../../source/list/set'

import {
  _,
} from '../../source/utils/curry'

import * as A from '../assert'

test('list#set: should be curryable', t => {
  t.is(set(_), set)
})


test('list#set: should set new value', t => {
  const k = 0
  const v = 'value'

  const l1 = {
    __data__: [],
    __size__: 0,
  }

  const l2 = set(l1, k, v)

  t.true(A.testRefs(l1, l2, [k]))
  t.is(l1.__data__[k], undefined)
  t.is(l2.__data__[k], v)
  t.is(l2.__size__, l1.__size__ + 1)
})


test('list#set: should overwrite value', t => {
  const k  = 0
  const v1 = 'value1'
  const v2 = 'value2'

  const l1 = {
    __data__: [ v1 ],
    __size__: 1,
  }

  const l2 = set(l1, k, v2)

  t.true(A.testRefs(l1, l2, [k]))
  t.is(l1.__data__[k], v1)
  t.is(l2.__data__[k], v2)
  t.is(l2.__size__, l1.__size__)
})
