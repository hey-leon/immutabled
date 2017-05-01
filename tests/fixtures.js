

//
// primitive fixtures
//
export const currString1 = 'currString1'
export const currString2 = 'currString2'
export const currString3 = 'currString3'
export const nextString1 = 'nextString1'
export const nextString2 = 'nextString2'
export const nextString3 = 'nextString3'


//
// map fixtures
//

export const map = () => ({
  __type__: '__immut_map__',
  __data__: {},
  __size__: 0,
})

export const mapOfa = () => ({
  __type__: '__immut_map__',
  __data__: { a: currString1 },
  __size__: 1,
})

export const mapOf1 = () => ({
  __type__: '__immut_map__',
  __data__: { [1]: currString1 },
  __size__: 1,
})

export const mapOfab = () => ({
  __type__: '__immut_map__',
  __data__: {
    a: currString1,
    b: currString2,
  },
  __size__: 2,
})

export const mapOfbc = () => ({
  __type__: '__immut_map__',
  __data__: {
    b: currString3,
    c: currString2,
  },
  __size__: 2,
})

export const mapOf = data => ({
  __type__: '__immut_map__',
  __data__: data,
  __size__: Object.keys(data).length,
})

export const mapOfMaps = () => ({
    __type__: '__immut_map__',
  __data__: {
    b: map(),
  },
  __size__: 1,
})

export const mapOfMapsA = () => ({
    __type__: '__immut_map__',
  __data__: {
    b: mapOfa(),
  },
  __size__: 1,
})




//
// list fixtures
//

export const list = () => ({
  __type__: '__immut_list__',
  __data__: [],
  __size__: 0,
})

export const listOf0 = () => ({
  __type__: '__immut_list__',
  __data__: [ currString1 ],
  __size__: 1,
})

export const listOf1 = () => ({
  __type__: '__immut_list__',
  __data__: [
    currString1,
    currString2,
  ],
  __size__: 2,
})

export const listOfLists = () => ({
  __type__: '__immut_list__',
  __data__: [
    list(),
  ],
  __size__: 1,
})

export const listOfLists0 = () => ({
  __type__: '__immut_list__',
  __data__: [
    listOf0(),
  ],
  __size__: 1,
})




//
// mixed fixtures
//

export const mapOfLists0 = () => ({
  __type__: '__immut_map__',
  __data__: {
    b: list(),
  },
  __size__: 1,
})

export const mapOfLists1 = () => ({
  __type__: '__immut_map__',
  __data__: {
    b: listOf0(),
  },
  __size__: 1,
})

export const listOfMaps0 = () => ({
  __type__: '__immut_list__',
  __data__: [
    map(),
  ],
  __size__: 1,
})

export const listOfMaps1 = () => ({
  __type__: '__immut_list__',
  __data__: [
    mapOfa(),
  ],
  __size__: 1,
})
