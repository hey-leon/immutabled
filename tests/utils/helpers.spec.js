import test from 'ava'

import { runtimeError } from '../../source/utils/helpers'


test('#runtimeError: should throw an error of type passed with message', t => {
  t.throws(() => runtimeError(TypeError), TypeError)
  t.throws(() => runtimeError(ReferenceError), ReferenceError)
  t.throws(() => runtimeError(Error), Error)
})
