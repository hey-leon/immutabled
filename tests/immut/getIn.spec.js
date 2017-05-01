import test from 'ava'

import getIn from '../../source/immut/getIn'
import {
  _,
} from '../../source/utils/curry'


test('immut#getIn: should be curryable', t => {
  t.is(getIn(_), getIn)
})

test('immut#getIn: should access member in map type', t => {
  const ks = [ 'a' ]
  const e = 'val'
  const i = { __data__: { [ks[0]]: e } }

  t.is(getIn(i, ks), e)
})

test('immut#getIn: should access entity in list type', t => {
  const ks = [ 0 ]
  const e = 'val'
  const i = { __data__: [ e ] }

  t.is(getIn(i, ks), e)
})

test('immut#getIn: should error on bad key for map type', t => {
  const ks = [ 1 ]
  const e = 'val'
  const i = { __data__: { [2]: e } }

  t.throws(() => getIn(i, ks), ReferenceError)
})

test('immut#getIn: should error on bad index for list type', t => {
  const ks = [ 1 ]
  const e = 'val'
  const i = { __data__: [ e ] }

  t.throws(() => getIn(i, ks), ReferenceError)
})

test('immut#getIn: should access nested member in map type', t => {
  const ks = [ 'a', 'b' ]
  const e = 'val'
  const i = {
    __data__: {
      [ks[0]]: { __data__: { [ks[1]]: e } },
    },
  }

  t.is(getIn(i, ks), e)
})

test('immut#getIn: should access nested entity in list type', t => {
  const ks = [ 0, 2 ]
  const e = 'val'
  const i = {
    __data__: [
      { __data__: [ 0, 1, e ] },
    ],
  }

  t.is(getIn(i, ks), e)
})

test('immut#getIn: should access nested entity in mixed type', t => {
  const ks = [ 1, 'a' ]
  const e = 'val'
  const i = {
    __data__: [
      0,
      { __data__: { [ks[1]]: e } },
    ],
  }

  t.is(getIn(i, ks), e)
})

test('immut#getIn: should error on bad key for nested map type', t => {
  const ks = [ 2, 'a' ]
  const e = 'val'
  const i = {
    __data__: {
      [2]: { __data__: { b: e } },
    },
  }

  t.throws(() => getIn(i, ks), ReferenceError)
})

test('immut#getIn: should error on bad index for nested list type', t => {
  const ks = [ 1, 1 ]
  const e = 'val'
  const i = {
    __data__: [
      0,
      { __data__: [ e ] },
    ],
  }

  t.throws(() => getIn(i, ks), ReferenceError)
})

test('immut#getIn: should error on bad index for nested mixed type', t => {
  const ks = [ 1, 'f' ]
  const e = 'val'
  const i = {
    __data__: [
      { __data__: { c: e } },
    ],
  }

  t.throws(() => getIn(i, ks), ReferenceError)
})
