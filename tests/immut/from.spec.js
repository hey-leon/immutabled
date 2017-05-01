import test from 'ava'


//
// NOTE: from is internally known as parse
//


import parse from '../../source/immut/from'

import list from '../../source/list'
import map  from '../../source/map'

import {
  ofMap,
  ofList,
  ofLeaf,
} from '../../source/immut/from'

import { _ } from '../../source/utils/curry'


test('immut.from: should be curryable', t => {
  t.is(parse(_), parse)
})


test('immut.from: should parse simple map', t => {
  const shape = {
    type: map.type,
    keys: {
      a: '',
      b: 33,
    }
  }

  const i = parse(shape, { a: 'holla', b: 10 } )
  t.is(i.__size__, 2)
  t.deepEqual(i, map.of({ a: 'holla', b: 10 }))
})


test('immut.from: should strip excess keys on map', t => {
  const shape = {
    type: map.type,
    keys: {
      b: 33,
    }
  }

  const i = parse(shape, { a: 'holla', b: 33 })
  t.is(i.__size__, 1)
  t.deepEqual(i, map.of({ b: 33 }))
})


test('immut.from: should add defaults for missing keys', t => {
  const shape = {
    type: map.type,
    keys: {
      b: 33,
      c: 'yolo',
    }
  }

  const i = parse(shape, { b: 22 })
  t.is(i.__size__, 2)
  t.deepEqual(i, map.of({ b: 22, c: 'yolo' }))
})


test('immut.from: should parse simple list', t => {
  const shape = { type: list.type }

  const i = parse(shape, [ 10, 22, 11 ])
  t.is(i.__size__, 3)
  t.deepEqual(i, list.of([ 10, 22, 11 ]))
})


test('immut.from: should parse map of maps', t => {
  const shape = {
    type: map.type,
    keys: {
      b: 33,
      c: {
        type: map.type,
        keys: {
          a: "kubernetes",
          b: "docker"
        },
      },
    },
  }

  const i = parse(shape, { b: 1, c: { b: "compose" } })
  t.is(i.__size__, 2)
  t.is(i.__data__.c.__size__, 2)
  t.deepEqual(i, map.of({
    b: 1,
    c: map.of({
      a: "kubernetes",
      b: "compose",
    }),
  }))
})


test('immut.from: should parse list of lists', t => {
  const shape = {
    type: list.type,
    item: {
      type: list.type,
      item: 0,
    },
  }

  const i = parse(shape, [ [], [], [], [] ])
  t.is(i.__size__, 4)
  t.is(i.__data__[0].__size__, 0)
  t.is(i.__data__[1].__size__, 0)
  t.is(i.__data__[2].__size__, 0)
  t.is(i.__data__[3].__size__, 0)
  t.deepEqual(i, list.of([
    list.of(),
    list.of(),
    list.of(),
    list.of(),
  ]))
})


test('immut.from: should parse complex shape', t => {
  const shape = {
    type: list.type,
    item: {
      type: map.type,
      keys: {
        b: 33,
        c: { type: list.type },
      },
    },
  }

  const i = parse(shape, [ { b: 22 }, { c: [ 10, 11 ] }, {} ])
  t.is(i.__size__, 3)
  t.is(i.__data__[0].__size__, 2)
  t.is(i.__data__[1].__size__, 2)
  t.is(i.__data__[2].__size__, 2)
  t.is(i.__data__[1].__data__.c.__size__, 2)
  t.deepEqual(i, list.of([
    map.of({ b: 22, c: list.of() }),
    map.of({ b: 33, c: list.of([ 10, 11 ]) }),
    map.of({ b: 33, c: list.of() }),
  ]))
})


test('ofMap: should throw if d !== {}', t => {
  t.throws(() => ofMap(null, ''), TypeError)
})


test('ofList: should throw if d !== []', t => {
  t.throws(() => ofList(null, {}), TypeError)
})


test('ofLeaf: should always return data if exists', t => {
  const d1 = 'holla world'
  const d2 = null

  const s = 'holla space'

  t.is(ofLeaf(s, d1), d1)
  t.is(ofLeaf(s, d2), d2)
  t.is(ofLeaf(s, undefined), s)
})
