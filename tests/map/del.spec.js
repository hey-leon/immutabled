import test from 'ava'
import symbols from '../../source/consts/symbols'
import del from '../../source/map/del'

import {
  _,
} from '../../source/utils/curry.js'

import * as A from '../assert'


test('map#del: should be curryable', t => {
  t.is(del(_), del)
})


test('map#del: should del new value', t => {
  const k  = 'b'
  const m1 = {
    __type__: symbols.map,
    __data__: { a: 1, b: 2, c: 3, d: 4 },
    __size__: 4,
  }

  const m2 = del(m1, k)
  t.true(A.testRefs(m1, m2, [k]))
  t.is(m1.__data__[k], 2)
  t.is(m2.__data__[k], undefined)
  t.is(m2.__size__, m1.__size__ - 1)
  t.deepEqual(m2.__data__, { a: 1, c: 3, d: 4 })
})
