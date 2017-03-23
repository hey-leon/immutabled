import test from 'ava'

import size from '../../source/immut/size'

test('immut#size: should return size of immut', t => {
  Array(25).fill().map((_, i) => {
    t.is(size({ __size__: i }), i)
  })
})
