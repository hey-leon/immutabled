import test from 'ava'

import Sinon from 'sinon'

import symbols from '../../source/consts/symbols'
import concat  from '../../source/list/concat'

import {
  _,
} from '../../source/utils/curry.js'

test('list#concat: should be curryable', t => {
  t.is(concat(_), concat)
})


test('list#concat: should return a list type', t => {
  const l1 = { __data__: [] }
  const l2 = { __data__: [] }

  t.is(concat(l1, l2).__type__, symbols.list)
})


test('list#concat: should call Array.prototype.concat w/ __data__', t => {
  const l1 = { __data__: [] }
  const l2 = { __data__: [] }

  const Spy = Sinon.spy(Array.prototype.concat, 'call')

  concat(l1, l2)

  t.true(Spy.calledWith(l1.__data__, l2.__data__))
})
