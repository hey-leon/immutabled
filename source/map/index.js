// @flow

import symbols   from '../consts/symbols'

import of        from './of'
import apply     from '../immut/apply'
import size      from '../immut/size'
import data      from '../immut/data'
import get       from '../immut/get'
import set       from './set'
import update    from './update'
import merge     from './merge'
import partition from './partition'
import pluck     from './pluck'


export const type = symbols.map

export {
  of,
  apply,
  size,
  data,
  get,
  set,
  update,
  merge,
  partition,
  pluck,
}


export default {
  type,
  of,
  apply,
  size,
  data,
  get,
  set,
  update,
  merge,
  partition,
  pluck,
}
