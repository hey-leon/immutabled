import test from 'ava'

import push from '../../source/list/push'

import {
  _,
} from '../../source/utils/curry'

import * as A from '../assert'

test('list#push: should be curryable', t => {
  t.is(push(_), push)
})


test('list#push: should push new value', t => {
  const k = 3
  const v = 'd'

  const l1 = {
    __data__: [ 'a', 'b', 'c' ],
    __size__: 3,
  }

  const l2 = push(l1, v)

  t.true(A.testRefs(l1, l2, [k]))
  t.is(l1.__data__[k], undefined)
  t.is(l2.__data__[k], v)
  t.is(l2.__size__, l1.__size__ + 1)
  t.deepEqual(l2.__data__, [ 'a', 'b', 'c', 'd' ])
})
