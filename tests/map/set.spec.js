import test from 'ava'

import set from '../../source/map/set'

import {
  _,
} from '../../source/utils/curry'

import { testRefs } from '../helpers'

test('map#set: should be curryable', t => {
  t.is(set(_), set)
})


test('map#set: should set new value', t => {
  const k = 'propOne'
  const v = 'value'

  const m1 = {
    __data__: {},
    __size__: 0,
  }

  const m2 = set(m1, k, v)

  t.true(testRefs(m1, m2, [k]))
  t.is(m1.__data__[k], undefined)
  t.is(m2.__data__[k], v)
})


test('map#set: should overwrite value', t => {
  const k  = 'propOne'
  const v1 = 'value1'
  const v2 = 'value2'

  const m1 = {
    __data__: { [k]: v1 },
    __size__: 0,
  }

  const m2 = set(m1, k, v2)

  t.true(testRefs(m1, m2, [k]))
  t.is(m1.__data__[k], v1)
  t.is(m2.__data__[k], v2)
})
