import test from 'ava'

import Sinon from 'sinon'

import has from '../../source/list/has'

import {
  _,
} from '../../source/utils/curry.js'


test('list#has: should be curryable', t => {
  t.is(has(_), has)
})


test('list#has: should call Array.prototype.includes w/ __data__', t => {
  const v = 2
  const l = {
    __data__: [ 1, 2, 3 ],
  }

  const Spy = Sinon.spy(Array.prototype.includes, 'call')

  has(l, v)

  t.true(Spy.calledWith(l.__data__, v))
})
