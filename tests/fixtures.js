

//
// primitive fixtures
//
export const string1 = 'string1'
export const string2 = 'string2'
export const string3 = 'string3'
export const string4 = 'string4'
export const string5 = 'string5'
export const string6 = 'string6'


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
  __data__: { a: string1 },
  __size__: 1,
})

export const mapOf1 = () => ({
  __type__: '__immut_map__',
  __data__: { [1]: string1 },
  __size__: 1,
})

export const mapOfab = () => ({
  __type__: '__immut_map__',
  __data__: {
    a: string1,
    b: string2,
  },
  __size__: 2,
})

export const mapOfbc = () => ({
  __type__: '__immut_map__',
  __data__: {
    b: string3,
    c: string2,
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
  __data__: [ string1 ],
  __size__: 1,
})

export const listOf1 = () => ({
  __type__: '__immut_list__',
  __data__: [
    string1,
    string2,
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
