import test from 'ava'

import {
  immut,
  list,
  map,
  _,
  curry,
  isList,
  isMap,
  isArray,
  isObject,
  isPrimitive,
} from '../source'


test('exports: immut is included', t => {
  t.true(immut === Object(immut))
})


test('exports: map is included', t => {
  t.true(map === Object(map))
})


test('exports: list is included', t => {
  t.true(list === Object(list))
})


test('exports: _ (no bind) is included', t => {
  t.true(_ === Symbol.for('no_bind'))
})


test('exports: #curry is included', t => {
  t.true(curry instanceof Function)
})


test('exports: #is* is included', t => {
  t.true(isList instanceof Function)
  t.true(isMap instanceof Function)
  t.true(isArray instanceof Function)
  t.true(isObject instanceof Function)
  t.true(isPrimitive instanceof Function)
})
