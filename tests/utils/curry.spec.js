import test from 'ava'

import {
  _,
  isNoBind,
  curry,
  curry1,
  curry2,
  curry3,
} from '../../source/utils/curry.js'


test('_: should === Symbol.for("no_bind"', t => {
  t.is(_, Symbol.for('no_bind'))
})


test('#isNoBind: should return true if arg === no bind', t => {
  t.true(isNoBind(_))
})


test('#isNoBind: should return false if arg !== no bind', t => {
  t.false(isNoBind('_'))
  t.false(isNoBind(2))
  t.false(isNoBind([]))
  t.false(isNoBind({}))
  t.false(isNoBind(Symbol('rand')))
  t.false(isNoBind(f => f))
})


test('#curry: should return the correct curried func', t => {
  const f3 = (a, b, c) => c
  const f2 = (a, b) => b
  const f1 = a => a

  t.is(curry(f1).name, 'c1')
  t.is(curry(f2).name, 'c2')
  t.is(curry(f3).name, 'c3')
})


test('#curry1: should return a curried 1 arg func', t => {
  const testFunc = a => a

  const cf1 = curry1(testFunc)

  t.is(cf1.name, 'c1')
  t.is(cf1.length, 1)
  t.is(cf1(), cf1)
  t.is(cf1(_), cf1)

  t.is(cf1(1), 1)
})


test('#curry2: should return a curried 2 arg func', t => {
  const testFunc = (a, b) => b

  const cf2 = curry2(testFunc)

  t.is(cf2.name, 'c2')
  t.is(cf2.length, 2)
  t.is(cf2(), cf2)
  t.is(cf2(_), cf2)
  t.is(cf2(_, _), cf2)

  t.is(cf2(1, 2), 2)
  t.is(cf2(1)(2), 2)
  t.is(cf2(1, _)(2), 2)
  t.is(cf2(_, 2)(1), 2)
})


test('#curry3: should return a curried 3 arg func', t => {
  const testFunc = (a, b, c) => c

  const cf3 = curry3(testFunc)

  t.is(cf3.name, 'c3')
  t.is(cf3.length, 3)
  t.is(cf3(), cf3)
  t.is(cf3(_), cf3)
  t.is(cf3(_, _), cf3)
  t.is(cf3(_, _, _), cf3)

  t.is(cf3(1, 2, 3), 3)
  t.is(cf3(1, 2)(3), 3)
  t.is(cf3(1, 2, _)(3), 3)
  t.is(cf3(1, _, 3)(2), 3)
  t.is(cf3(_, 2, 3)(1), 3)
  t.is(cf3(1)(2)(3), 3)
  t.is(cf3(1)(2, _)(3), 3)
  t.is(cf3(1, _)(2)(3), 3)
  t.is(cf3(1, _)(2, _)(3), 3)
  t.is(cf3(1, _)(_, 3)(2), 3)
  t.is(cf3(1, _, _)(2)(3), 3)
  t.is(cf3(1, _, _)(2, _)(3), 3)
  t.is(cf3(1, _, _)(_, 3)(2), 3)
  t.is(cf3(_, 2)(1)(3), 3)
  t.is(cf3(_, 2)(1, _)(3), 3)
  t.is(cf3(_, 2)(_, 3)(1), 3)
  t.is(cf3(_, 2, _)(1)(3), 3)
  t.is(cf3(_, 2, _)(1, _)(3), 3)
  t.is(cf3(_, 2, _)(_, 3)(1), 3)
  t.is(cf3(_, _, 3)(1)(2), 3)
  t.is(cf3(_, _, 3)(1, _)(2), 3)
  t.is(cf3(_, _, 3)(_, 2)(1), 3)
})
