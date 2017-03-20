import test from 'ava'

import update from '../../source/map/update'

import {
  _,
} from '../../source/utils/curry'


test('map#update: should be curryable', t => {
  t.is(update(_), update)
})


test('map#update: should update value', t => {
  const prevMap = { __data__: { p: 1 }, __size__: 1 }
  const nextMap =
    update(prevMap, 'p', (v=0) => v + 1)

  t.not(prevMap, nextMap)
  t.not(prevMap.__data__, nextMap.__data__)
  t.is(nextMap.__data__.p, 2)
  t.is(prevMap.__data__.p, 1)
  t.is(prevMap.__size__, 1)
  t.is(nextMap.__size__, 1)
})


test('map#update: should update when no value already', t => {
  const prevMap = { __data__: {}, __size__: 0 }
  const nextMap =
    update(prevMap, 'p', (v=0) => v + 1)

  t.not(prevMap, nextMap)
  t.not(prevMap.__data__, nextMap.__data__)
  t.is(prevMap.__data__.p, undefined)
  t.is(nextMap.__data__.p, 1)
  t.is(prevMap.__size__, 0)
  t.is(nextMap.__size__, 1)
})
