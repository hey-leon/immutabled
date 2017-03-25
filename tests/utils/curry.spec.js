import test from 'ava'

import {
  _,
  noBind,
  curry,
  curry1,
  curry2,
  curry3,
} from '../../source/utils/curry.js'


test('_: should === Symbol.for("no_bind"', t => {
  t.is(_, Symbol.for('no_bind'))
})


test('#noBind: should return true if arg === no bind', t => {
  t.true(noBind(_))
})


test('#noBind: should return false if arg !== no bind', t => {
  t.false(noBind('_'))
  t.false(noBind(2))
  t.false(noBind([]))
  t.false(noBind({}))
  t.false(noBind(Symbol('rand')))
  t.false(noBind(f => f))
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
  const currFunc = curry1(testFunc)

  t.is(currFunc.length, 1)
  t.is(currFunc(_), currFunc)
  t.is(currFunc(3), 3)
})


test('#curry2: should return a curried 2 arg func', t => {
  const testFunc = (a, b) => b
  const currFunc2 = curry2(testFunc)

  t.is(currFunc2.length, 2)

  const currFuncA = currFunc2(1)    // (1, _)
  const currFuncB = currFunc2(_, 3) // (_, 3)

  t.is(currFuncA.length, 1)
  t.is(currFuncB.length, 1)
  t.is(currFuncA(6), 6)
  t.is(currFuncB(6), 3)
})


test('#curry3: should return a curried 3 arg func', t => {
  const testFunc = (a, b, c) => c
  const currFunc3 = curry3(testFunc)

  t.is(currFunc3.length, 3)

  const currFuncA = currFunc3(1)       // (1, _, _)
  const currFuncB = currFunc3(_, 2)    // (_, 2, _)
  const currFuncC = currFunc3(_, _, 3) // (_, _, 3)

  t.is(currFuncA.length, 2)
  t.is(currFuncB.length, 2)
  t.is(currFuncC.length, 2)

  const currFuncAB = currFuncA(4)    // (1, 4, _)
  const currFuncAC = currFuncA(_, 5) // (1, _, 5)
  const currFuncBA = currFuncB(6)    // (6, 2, _)
  const currFuncBC = currFuncB(_, 7) // (_, 2, 7)
  const currFuncCA = currFuncC(8)    // (8, _, 3)
  const currFuncCB = currFuncC(_, 9) // (_, 9, 3)

  t.is(currFuncAB.length, 1)
  t.is(currFuncAC.length, 1)
  t.is(currFuncBA.length, 1)
  t.is(currFuncBC.length, 1)
  t.is(currFuncCA.length, 1)
  t.is(currFuncCB.length, 1)
  t.is(currFuncAB(10), 10)
  t.is(currFuncAC(11), 5)
  t.is(currFuncBA(12), 12)
  t.is(currFuncBC(13), 7)
  t.is(currFuncCA(14), 3)
  t.is(currFuncCB(15), 3)
})
