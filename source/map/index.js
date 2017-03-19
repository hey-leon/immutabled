// @flow

import Symbols   from '../consts/symbols'

import of        from './of'
import apply     from '../immut/apply'
import size      from '../immut/size'
import get       from '../immut/get'
import set       from './set'
import update    from './update'
import merge     from './merge'
import partition from './partition'


export default {
  type: Symbols.Map,
  of,
  apply,
  size,
  get,
  set,
  update,
  merge,
  partition,
}
