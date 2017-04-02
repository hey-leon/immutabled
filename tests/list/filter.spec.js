import test from 'ava'

import Sinon from 'sinon'

import symbols from '../../source/consts/symbols'
import filter  from '../../source/list/filter'

import {
  _,
} from '../../source/utils/curry.js'

test('list#filter: should be curryable', t => {
  t.is(filter(_), filter)
})


test('list#filter: should return a list type', t => {
  const l = {
    __data__: []
  }

  t.is(filter(l, f => f).__type__, symbols.list)
})


test('list#filter: should call Array.prototype.filter w/ __data__', t => {
  const f = f => f
  const l = {
    __data__: []
  }

  const Spy = Sinon.spy(Array.prototype.filter, 'call')

  filter(l, f)

  t.true(Spy.calledWith(l.__data__, f))
})
