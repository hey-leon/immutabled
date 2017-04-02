import test from 'ava'

import Sinon from 'sinon'

import every from '../../source/list/every'

import {
  _,
} from '../../source/utils/curry.js'


test('list#every: should be curryable', t => {
  t.is(every(_), every)
})


test('list#every: should call Array.prototype.every w/ __data__', t => {
  const f = v => v > 0
  const l = {
    __data__: [ 1, 2, 3 ],
  }

  const Spy = Sinon.spy(Array.prototype.every, 'call')

  every(l, f)

  t.true(Spy.calledWith(l.__data__, f))
})
