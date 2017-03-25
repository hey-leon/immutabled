import test from 'ava'

import pop from '../../source/list/pop'

import { testRefs } from '../helpers'

test('list#pop: should pop new value', t => {
  const k = 3
  const v = 'd'

  const l1 = {
    __data__: [ 'a', 'b', 'c', 'd' ],
    __size__: 4,
  }

  const l2 = pop(l1, v)

  t.true(testRefs(l1, l2, [k]))
  t.is(l1.__data__[k], v)
  t.is(l2.__data__[k], undefined)
  t.is(l2.__size__, l1.__size__ - 1)
  t.deepEqual(l2.__data__, [ 'a', 'b', 'c' ])
})
