// @flow
import { runtimeError } from '../utils/helpers'
import { curry }        from '../utils/curry'
import type { Immut }   from '../consts/types'


/**
 * takes an immutable collection and a key and
 * returns the entity from the collection that
 * the key refences.
 *
 * @name immut.get
 * @param  {Immut} i immutable species
 * @param  {any}   k of member
 * @return {any} an entity from the collection
 * @since 0.0.1
 */
export const get: (i: Immut, k: any) => any =
  (i, k) => k in i.__data__
    ? i.__data__[k]
    : runtimeError(ReferenceError, `Immut does not contain ${k}`)


export default curry(get)
