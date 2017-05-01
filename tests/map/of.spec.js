import test from 'ava'

import * as A from '../assert'
import * as F from '../fixtures'

import of from '../../source/map/of'

test('map.of: should return map of undefined', A.testOf, undefined, F.map(), of)

test('map.of: should return map of {}', A.testOf, {}, F.map(), of)

test(
  'map.of: should return map of {} with props',
  A.testOf,
  { a: F.currString1 },
  F.mapOfa(),
  of
)

test(
  'map.of: should return map of {} with nested',
  A.testOf,
  { a: {} },
  F.mapOf({ a: {} }),
  of
)

test(
  'map.of: should return map of complex shape',
  A.testOf,
  { a: {}, b: F.currString1 },
  F.mapOf({ a: {}, b: F.currString1 }),
  of
)

test(
  'map.of: should return map of map',
  A.testOf,
  F.mapOfa(),
  F.mapOfa(),
  of
)
