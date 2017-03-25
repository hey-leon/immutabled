// @flow

import type { Func } from '../consts/types'


export const _: Symbol = Symbol.for('no_bind')


export const noBind: Symbol => boolean = s => s === Symbol.for('no_bind')


export const curry: Func => Func = f => curryn[f.length](f)


export const curry1: Func => Func =
  f => function c1(a) {
    switch (arguments.length) {
      case 0:
        return c1
      default:
        return noBind(a) ? c1 : f(a)
    }
  }


export const curry2: Func => Func =
  f => function c2(a, b) {
    switch (arguments.length) {
      case 0:
        return c2
      case 1:
        return noBind(a) ? c2 : curry1(_b => f(a, _b))
      default:
        return noBind(a) && noBind(b) ? c2
             : noBind(a) ? curry1(_a => f(_a, b))
             : noBind(b) ? curry1(_b => f(a, _b))
             : f(a, b)
    }
  }


export const curry3: Func => Func =
  f => function c3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return c3
      case 1:
        return noBind(a) ? c3 : curry2((_b, _c) => f(a, _b, _c))
      case 2:
        return noBind(a) && noBind(b) ? c3
             : noBind(a) ? curry2((_a, _c) => f(_a, b, _c))
             : noBind(b) ? curry2((_b, _c) => f(a, _b, _c))
             : curry1(_c => f(a, b, _c))
      default:
        return noBind(a) && noBind(b) && noBind(c) ? c3
             : noBind(a) && noBind(b) ? curry2((_a, _b) => f(_a, _b, c))
             : noBind(a) && noBind(c) ? curry2((_a, _c) => f(_a, b, _c))
             : noBind(b) && noBind(c) ? curry2((_b, _c) => f(a, _b, _c))
             : noBind(a) ? curry1(_a => f(_a, b, c))
             : noBind(b) ? curry1(_b => f(a, _b, c))
             : noBind(c) ? curry1(_c => f(a, b, _c))
             : f(a, b, c)
    }
  }


const curryn: { [k: number]: Func } =
  { [1]: curry1
  , [2]: curry2
  , [3]: curry3
  }
