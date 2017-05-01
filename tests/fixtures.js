

//
// primitive fixtures
//
export const currString1 = 'currString1'
export const currString2 = 'currString2'
export const nextString1 = 'nextString1'
export const nextString2 = 'nextString2'


//
// map fixtures
//

export const mapOf0 = () => ({
  __type__: '__immut_map__',
  __data__: {},
  __size__: 0,
})

export const mapOf1 = () => ({
  __type__: '__immut_map__',
  __data__: { a: currString1 },
  __size__: 1,
})

export const mapOf1n = () => ({
  __type__: '__immut_map__',
  __data__: { [1]: currString1 },
  __size__: 1,
})

export const mapOf2 = () => ({
  __type__: '__immut_map__',
  __data__: {
    b: currString1,
    c: currString2,
  },
  __size__: 2,
})

export const mapOfMaps0 = () => ({
    __type__: '__immut_map__',
  __data__: {
    b: mapOf0(),
  },
  __size__: 1,
})

export const mapOfMaps1 = () => ({
    __type__: '__immut_map__',
  __data__: {
    b: mapOf1(),
  },
  __size__: 1,
})




//
// list fixtures
//

export const listOf0 = () => ({
  __type__: '__immut_list__',
  __data__: [],
  __size__: 0,
})

export const listOf1 = () => ({
  __type__: '__immut_list__',
  __data__: [ currString1 ],
  __size__: 1,
})

export const listOf2 = () => ({
  __type__: '__immut_list__',
  __data__: [
    currString1,
    currString2,
  ],
  __size__: 2,
})

export const listOfLists0 = () => ({
  __type__: '__immut_list__',
  __data__: [
    listOf0(),
  ],
  __size__: 1,
})

export const listOfLists1 = () => ({
  __type__: '__immut_list__',
  __data__: [
    listOf1(),
  ],
  __size__: 1,
})




//
// mixed fixtures
//

export const mapOfLists0 = () => ({
  __type__: '__immut_map__',
  __data__: {
    b: listOf0(),
  },
  __size__: 1,
})

export const mapOfLists1 = () => ({
  __type__: '__immut_map__',
  __data__: {
    b: listOf1(),
  },
  __size__: 1,
})

export const listOfMaps0 = () => ({
  __type__: '__immut_list__',
  __data__: [
    mapOf0(),
  ],
  __size__: 1,
})

export const listOfMaps1 = () => ({
  __type__: '__immut_list__',
  __data__: [
    mapOf1(),
  ],
  __size__: 1,
})
