import test from 'ava'

import Sinon from 'sinon'

import fold    from '../../source/list/fold'

import {
  _,
} from '../../source/utils/curry.js'

test('list#fold: should be curryable', t => {
  t.is(fold(_), fold)
})


test('list#fold: should call Array.prototype.reduce w/ __data__', t => {
  const f = (acc, i) => i
  const l = {
    __data__: [],
  }
  const i = 0

  const Spy = Sinon.spy(Array.prototype.reduce, 'call')

  fold(l, f, i)

  t.true(Spy.calledWith(l.__data__, f, i))
})
