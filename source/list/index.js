// @flow

import symbols   from '../consts/symbols'

import of        from './of'
import apply     from '../immut/apply'
import size      from '../immut/size'
import data      from '../immut/data'
import get       from '../immut/get'
import set       from './set'
import update    from './update'
import push      from './push'
import pop       from './pop'
import indexOf   from './indexOf'
import filter    from './filter'
import find      from './find'
import findIndex from './findIndex'
import concat    from './concat'
import every     from './every'
import some      from './some'
import has       from './has'
import partition from './partition'
import map       from './map'


export const type = symbols.list

export {
  of,
  apply,
  size,
  data,
  get,
  set,
  update,
  push,
  pop,
  indexOf,
  filter,
  partition,
  concat,
  every,
  some,
  find,
  findIndex,
  has,
  map,
}


export default {
  type: symbols.list,
  of,
  apply,
  size,
  data,
  get,
  set,
  update,
  push,
  pop,
  indexOf,
  filter,
  partition,
  concat,
  every,
  some,
  find,
  findIndex,
  has,
  map,
}
