import test from 'ava'

import get from '../../source/immut/get'

import {
  _,
} from '../../source/utils/curry'


test('immut#get: should be curryable', t => {
  t.is(get(_), get)
})

test('immut#get: should access string keyed member on map type', t => {
  const k = 'a'
  const e = 'val'
  const i = { __data__: { [k]: e } }

  t.is(get(i, k), e)
})

test('immut#get: should access number keyed member on map type', t => {
  const k = 1
  const e = 'val'
  const i = { __data__: { [k]: e } }

  t.is(get(i, k), e)
})

test('immut#get: should access index on list type', t => {
  const k = 0
  const e = 'val'
  const i = { __data__: [ e ] }

  t.is(get(i, k), e)
})

test('immut#get: should error on bad key of map type', t => {
  const k = 1
  const e = 'val'
  const i = { __data__: { [2]: e } }

  t.throws(() => get(i, k), ReferenceError)
})

test('immut#get: should error on bad key of list type', t => {
  const k = 1
  const e = 'val'
  const i = { __data__: [ e ] }

  t.throws(() => get(i, k), ReferenceError)
})
