import test from 'ava'

import Sinon from 'sinon'

import indexOf from '../../source/list/indexOf'

import {
  _,
} from '../../source/utils/curry.js'

test('list#indexOf: should be curryable', t => {
  t.is(indexOf(_), indexOf)
})



test('list#indexOf: should call Array.prototype.indexOf w/ __data__', t => {
  const i = 1
  const l = { __data__: [ 1 ] }

  const Spy = Sinon.spy(Array.prototype.indexOf, 'call')

  indexOf(l, i)

  t.true(Spy.calledWith(l.__data__, i))
})
