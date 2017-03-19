import test from 'ava'

import update from '../../source/map/update'

import {
  _,
} from '../../source/utils/curry'


test('map#update: should be curryable', t => {
  t.is(update(_), update)
})


test('map#update: should update value', t => {
  const applicator = v => v + 1

  const prevMap = {
    __data__: { p: 1 },
    __size__: 0,
  }

  const nextMap = update(prevMap, 'p', applicator)
  t.not(prevMap, nextMap)
  t.not(prevMap.__data__, nextMap.__data__)
  t.is(nextMap.__data__.p, 2)
  t.is(prevMap.__data__.p, 1)
})
