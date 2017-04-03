import test from 'ava'

import Sinon from 'sinon'

import symbols from '../../source/consts/symbols'
import map  from '../../source/list/map'

import {
  _,
} from '../../source/utils/curry.js'

test('list#map: should be curryable', t => {
  t.is(map(_), map)
})


test('list#map: should return a list type', t => {
  const l = {
    __data__: [],
  }

  t.is(map(l, f => f).__type__, symbols.list)
})


test('list#map: should call Array.prototype.map w/ __data__', t => {
  const f = f => f
  const l = {
    __data__: [],
  }

  const Spy = Sinon.spy(Array.prototype.map, 'call')

  map(l, f)

  t.true(Spy.calledWith(l.__data__, f))
})
