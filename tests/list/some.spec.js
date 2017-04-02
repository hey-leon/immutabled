import test from 'ava'

import Sinon from 'sinon'

import some from '../../source/list/some'

import {
  _,
} from '../../source/utils/curry.js'


test('list#some: should be curryable', t => {
  t.is(some(_), some)
})


test('list#some: should call Array.prototype.some w/ __data__', t => {
  const f = v => v > 0
  const l = {
    __data__: [ 1, 2, 3 ],
  }

  const Spy = Sinon.spy(Array.prototype.some, 'call')

  some(l, f)

  t.true(Spy.calledWith(l.__data__, f))
})
