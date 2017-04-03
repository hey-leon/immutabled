import test from 'ava'

import Sinon from 'sinon'

import symbols from '../../source/consts/symbols'
import sort  from '../../source/list/sort'

import {
  _,
} from '../../source/utils/curry.js'

test('list#sort: should be curryable', t => {
  t.is(sort(_), sort)
})


test('list#sort: should return a list type', t => {
  const l = {
    __data__: []
  }

  t.is(sort(l, f => f).__type__, symbols.list)
})


test('list#sort: should call Array.prototype.sort w/ __data__', t => {
  const f = () => 1 || 0 || -1
  const l = {
    __data__: []
  }

  const Spy = Sinon.spy(Array.prototype.sort, 'call')

  sort(l, f)

  t.true(Spy.calledWith(l.__data__, f))
})
