import test from 'ava'

import merge from '../../source/map/merge'

import {
  _,
} from '../../source/utils/curry'


test('map#merge: should be curryable', t => {
  t.is(merge(_), merge)
})


// test('map#merge: should merge value', t => {
//   const applicator = v => v + 1

//   const prevMap = {
//     __data__: { p: 1 },
//     __size__: 0,
//   }

//   const nextMap = merge(prevMap, 'p', applicator)
//   t.not(prevMap, nextMap)
//   t.not(prevMap.__data__, nextMap.__data__)
//   t.is(nextMap.__data__.p, 2)
//   t.is(prevMap.__data__.p, 1)
// })
