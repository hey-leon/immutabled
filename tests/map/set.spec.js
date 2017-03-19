import test from 'ava'

import set from '../../source/map/set'

import {
  _,
} from '../../source/utils/curry'


test('map#set: should be curryable', t => {
  t.is(set(_), set)
})


test('map#set: should set new value', t => {
  const key = 'propOne'
  const val = 'value'

  const prevMap = {
    __data__: {},
    __size__: 0,
  }

  const nextMap = set(prevMap, key, val)
  t.not(prevMap, nextMap)
  t.not(prevMap.__data__, nextMap.__data__)
  t.is(nextMap.__data__[key], val)
  t.is(prevMap.__data__[key], undefined)
})


test('map#set: should overwrite value', t => {
  const key  = 'propOne'
  const val1 = 'value1'
  const val2 = 'value2'

  const prevMap = {
    __data__: { [key]: val1 },
    __size__: 0,
  }

  const nextMap = set(prevMap, key, val2)
  t.not(prevMap, nextMap)
  t.not(prevMap.__data__, nextMap.__data__)
  t.is(nextMap.__data__[key], val2)
})
