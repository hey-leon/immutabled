# Immutabled

[![codecov](https://codecov.io/gh/leonp1991/immut/branch/master/graph/badge.svg)](https://codecov.io/gh/leonp1991/immut)


## concept
Immutabled is a low cost (size) immutable data structure library. Performance is saved through using structural sharing of copies, and developer sanity is kept through referential transparency.

## comparison to immutable-js
In comparison this library curbs the OO api for a more traditional functional api, including support for partial application possible
with all helpers, i.e.

```javascript
import { map, _ } from 'immutabled'

/**
 * takes a user returns a user with loggedIn === true
 *
 * userLoggedIn: user => user
 */
const userLogIn = map.set(_, "loggedIn", true)
```

## how to install
```sh
yarn add -S immutabled
```

## how to import
The recommended import is the es version if you are using webpack 2:

```javascript
import { map, _ } from 'immutabled/es'
```

For for legacy imports:
```javascript
import { map, _ } from 'immutabled'

// or

const { map, _ } = require('immutabled')
```

## configure webpack to tree shake node_modules/**/es/*

to tree shake node_modules it is important that we import the native modules versions, but
also, make sure that they are transpiled by webpack. to do this we need to configure our webpack
rule for js slightly different slightly different.

```javascript
const jsRule = {
  test: /\.jsx?$/,
  exclude: /node_modules\/(?!.*?es)/, // exclude node modules unless inside a 'es' sub directory
  use: 'babel-loader',
}
```

this will allow traditional node_modules to skip transpilation, but modules inside an 'es'
sub directory to transpiled.





