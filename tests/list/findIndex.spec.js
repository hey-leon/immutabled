import test from 'ava'

import Sinon from 'sinon'

import findIndex from '../../source/list/findIndex'

import {
  _,
} from '../../source/utils/curry.js'


test('list#findIndex: should be curryable', t => {
  t.is(findIndex(_), findIndex)
})


test('list#findIndex: should call Array.prototype.findIndex w/ __data__', t => {
  const f = v => v > 0
  const l = {
    __data__: [ 1, 2, 3 ],
  }

  const Spy = Sinon.spy(Array.prototype.findIndex, 'call')

  findIndex(l, f)

  t.true(Spy.calledWith(l.__data__, f))
})
