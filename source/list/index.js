// @flow

import symbols from '../consts/symbols'

import of      from './of'
import apply   from '../immut/apply'
import size    from '../immut/size'
import get     from '../immut/get'
import set     from './set'
import update  from './update'
import push    from './push'
import pop     from './pop'


export default {
  type: symbols.list,
  of,
  apply,
  size,
  get,
  set,
  update,
  push,
  pop,
}
