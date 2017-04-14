// @flow

import type { Func } from '../consts/types'


/**
 * _ is used as a no bind for partial application.
 *
 * @type {Symbol} _ no bind symbol
 * @since 0.0.1
 */
export const _: Symbol = Symbol.for('no_bind')


/**
 * identifies if entity is no bind symbol
 *
 * @name isNoBind
 * @param  {any} u to be identified if is no bind symbol
 * @return {bool} whether entity is no bind
 * @since 0.0.1
 */
export const isNoBind: (u: any) => boolean = u => u === Symbol.for('no_bind')


/**
 * takes a function of 1..3 args and returns a curried version
 *
 * @name curry
 * @param  {Func} f to be curried
 * @return {Func} a curried version of f
 * @since 0.0.1
 */
export const curry: (f: Func) => Func = f => curryn[f.length](f)


/**
 * takes a function of 1 args and returns a curried version
 *
 * @name curry1
 * @param  {Func} f to be curried
 * @return {Func} a curried version of f
 * @since 0.0.1
 */
export const curry1: (f: Func) => Func =
  f => function c1(a) {
    switch (arguments.length) {
      case 0:
        return c1
      default:
        return isNoBind(a) ? c1 : f(a)
    }
  }


/**
 * takes a function of 2 args and returns a curried version
 *
 * @name curry2
 * @param  {Func} f to be curried
 * @return {Func} a curried version of f
 * @since 0.0.1
 */
export const curry2: (f: Func) => Func =
  f => function c2(a, b) {
    switch (arguments.length) {
      case 0:
        return c2
      case 1:
        return isNoBind(a) ? c2 : curry1(_b => f(a, _b))
      default:
        return isNoBind(a) && isNoBind(b) ? c2
             : isNoBind(a) ? curry1(_a => f(_a, b))
             : isNoBind(b) ? curry1(_b => f(a, _b))
             : f(a, b)
    }
  }


/**
 * takes a function of 3 args and returns a curried version
 *
 * @name curry3
 * @param  {Func} f to be curried
 * @return {Func} a curried version of f
 * @since 0.0.1
 */
export const curry3: (f: Func) => Func =
  f => function c3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return c3
      case 1:
        return isNoBind(a) ? c3 : curry2((_b, _c) => f(a, _b, _c))
      case 2:
        return isNoBind(a) && isNoBind(b) ? c3
             : isNoBind(a) ? curry2((_a, _c) => f(_a, b, _c))
             : isNoBind(b) ? curry2((_b, _c) => f(a, _b, _c))
             : curry1(_c => f(a, b, _c))
      default:
        return isNoBind(a) && isNoBind(b) && isNoBind(c) ? c3
             : isNoBind(a) && isNoBind(b) ? curry2((_a, _b) => f(_a, _b, c))
             : isNoBind(a) && isNoBind(c) ? curry2((_a, _c) => f(_a, b, _c))
             : isNoBind(b) && isNoBind(c) ? curry2((_b, _c) => f(a, _b, _c))
             : isNoBind(a) ? curry1(_a => f(_a, b, c))
             : isNoBind(b) ? curry1(_b => f(a, _b, c))
             : isNoBind(c) ? curry1(_c => f(a, b, _c))
             : f(a, b, c)
    }
  }


/**
 * @type {Object} curryn map of curry functions
 * @since 0.0.1
 */
const curryn: { [k: number]: Func } =
  { [1]: curry1
  , [2]: curry2
  , [3]: curry3
  }
