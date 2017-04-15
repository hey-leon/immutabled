import test from 'ava'

import del from '../../source/map/del'

import {
  _,
} from '../../source/utils/curry.js'

import { testRefs } from '../helpers'


test('map#del: should be curryable', t => {
  t.is(del(_), del)
})


test('map#del: should del new value', t => {
  const k  = 'b'
  const l1 = {
    __data__: { a: 1, b: 2, c: 3, d: 4 },
    __size__: 4,
  }

  const l2 = del(l1, k)

  t.true(testRefs(l1, l2, [k]))
  t.is(l1.__data__[k], 2)
  t.is(l2.__data__[k], undefined)
  t.is(l2.__size__, l1.__size__ - 1)
  t.deepEqual(l2.__data__, { a: 1, c: 3, d: 4 })
})
