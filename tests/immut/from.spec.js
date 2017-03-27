import test from 'ava'

// from is internally known as parse
import parse from '../../source/immut/from'

import list from '../../source/map'
import map  from '../../source/map'

import {
  ofMap,
  ofList,
  ofLeaf,
} from '../../source/immut/from'

import { _ } from '../../source/utils/curry'


test('immut#from: should be curryable', t => {
  t.is(parse(_), parse)
})


test('immut#from: should parse simple map', t => {
  const shape = {
    type: map.type,
    keys: {
      a: '',
      b: 33,
    }
  }

  t.deepEqual(
    parse(shape, { a: 'holla', b: 10 } ),
    map.of({
      a: 'holla',
      b: 10,
    })
  )
})


test('immut#from: should strip excess keys on map', t => {
  const shape = {
    type: map.type,
    keys: {
      b: 33,
    }
  }

  t.deepEqual(
    parse(shape, { a: 'holla', b: 33 }),
    map.of({
      b: 33,
    })
  )
})


test('immut#from: should add defaults for missing keys', t => {
  const shape = {
    type: map.type,
    keys: {
      b: 33,
      c: 'yolo',
    }
  }

  t.deepEqual(
    parse(shape, { b: 22 }),
    map.of({
      b: 22,
      c: 'yolo',
    })
  )
})


test.todo('immut#from: should parse simple list')


test.todo('immut#from: should parse map of maps')


test.todo('immut#from: should parse list of lists')


test.todo('immut#from: should parse complex shape')


test('ofMap: should throw if d !== {}', t => {
  t.throws(() => ofMap(null, ''), TypeError)
})


test('ofList: should throw if d !== []', t => {
  t.throws(() => ofList(null, {}), TypeError)
})


test('#ofList: should always return data if exists', t => {
  const d1 = 'holla world'
  const d2 = null

  const s = 'holla space'

  t.is(ofLeaf(s, d1), d1)
  t.is(ofLeaf(s, d2), d2)
  t.is(ofLeaf(s, undefined), s)
})
