import test from 'ava'

import update from '../../source/map/update'

import {
  _,
} from '../../source/utils/curry'

import { testRefs } from '../helpers'

test('map#update: should be curryable', t => {
  t.is(update(_), update)
})


test('map#update: should update value', t => {
  const k = 'prop'
  const v = 1

  const m1 = {
    __data__: { [k]: v },
    __size__: 1
  }

  const m2 = update(m1, k, (v=0) => v + 1)

  t.true(testRefs(m1, m2, [k]))
  t.is(m1.__data__[k], 1)
  t.is(m2.__data__[k], 2)
})


test('map#update: should update when no value already', t => {
  const k = 'prop'

  const m1 = {
    __data__: {},
    __size__: 0
  }

  const m2 = update(m1, k, (v=0) => v + 1)

  t.true(testRefs(m1, m2, [k]))
  t.is(m1.__data__[k], undefined)
  t.is(m2.__data__[k], 1)
})
