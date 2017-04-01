import test from 'ava'

import data from '../../source/immut/data'

test('immut#data: should return __data__ of immut', t => {
  const i = { __data__: 123456 }
  t.is(data(i), 123456)
})
