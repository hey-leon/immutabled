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
import concat    from './concat'
import every     from './every'
import some      from './some'
import partition from './partition'


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
}
