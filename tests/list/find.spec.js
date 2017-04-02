import test from 'ava'

import Sinon from 'sinon'

import find from '../../source/list/find'

import {
  _,
} from '../../source/utils/curry.js'


test('list#find: should be curryable', t => {
  t.is(find(_), find)
})


test('list#find: should call Array.prototype.find w/ __data__', t => {
  const f = v => v > 0
  const l = {
    __data__: [ 1, 2, 3 ],
  }

  const Spy = Sinon.spy(Array.prototype.find, 'call')

  find(l, f)

  t.true(Spy.calledWith(l.__data__, f))
})
