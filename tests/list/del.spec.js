import test from 'ava'

import del from '../../source/list/del'

import {
  _,
} from '../../source/utils/curry.js'

import { testRefs } from '../helpers'


test('list#del: should be curryable', t => {
  t.is(del(_), del)
})


test('list#del: should del new value', t => {
  const k = 2
  const l1 = {
    __data__: [ 'a', 'b', 'c', 'd' ],
    __size__: 4,
  }

  const l2 = del(l1, k)

  t.true(testRefs(l1, l2, [k]))
  t.is(l1.__data__[k], 'c')
  t.is(l2.__data__[k], 'd')
  t.is(l2.__size__, l1.__size__ - 1)
  t.deepEqual(l2.__data__, [ 'a', 'b', 'd' ])
})
