
/**
 * @param {Object} t ava assertions
 * @param {Object|List} i input for #of
 * @param {List} e expected output
 * @param {Func} of for immut type
 */
export const testOf =
  (t, i, e, of) => {
    const output = of(i)

    const data = !i          ? {}
              :  i.__data__ ? i.__data__
              :  i

    t.is(output.__type__, e.__type__)  // test the __type__
    t.is(output.__size__, e.__size__)  // test the __size__
    t.not(output.__data__, data)       // test for new ref

    Object // test shallow copy
      .entries(data)
      .forEach(([k, v]) => { t.is(v, output.__data__[k]) })
  }


/**
 * @param {Immut} i1 previous immut
 * @param {Immut} i2 next immut
 * @param {string[]} ks of expected changed refs
 */
export const testRefs =
  (i1, i2, ks) => i1 !== i2
               && i1.__data__ !== i2.__data__
               && testDataRefs(i1, i2, ks)


/**
 * - if _k === k, expect keys !eq, if ks test refs of ix.__data__[k]
 * - if _k !== k, expect keys  eq
 */
export const testDataRefs =
  (i1, i2, [ k, ...ks ]) => Object.keys(i2).every(
    _k => _k === k

      ? ks ? notEq(i1, i2, k) && testRefs(i1.__data__[k], i2.__data__[k], ks)
           : notEq(i1, i2, k)

      : isEq(i1, i2, _k)
  )


/**
 * ref checks
 */
export const notEq = (i1, i2, k) => i1.__data__[k] !== i2.__data__[k]
export const isEq  = (i1, i2, k) => i1.__data__[k] === i2.__data__[k]
