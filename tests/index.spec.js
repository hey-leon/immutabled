import test from 'ava'

import {
  immut,
  map,
  list,
  is,
  _,
  curry,
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


test('exports: is is included', t => {
  t.true(is === Object(is))
})


test('exports: _ (no bind) is included', t => {
  t.true(_ === Symbol.for('no_bind'))
})


test('exports: curry is included', t => {
  t.true(curry instanceof Function)
})
