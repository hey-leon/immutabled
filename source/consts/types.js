// @flow


//
// implementation for flow types
// @author Leon Pearce <leonp1991@gmail.com>
//


//---------------------------- immut data types -----------------------------//

export type Immut = List | Map


export type Map = {|
  __type__: '__immut_map__',
  __data__: Object,
  __size__: number,
|}


export type List = {|
  __type__: '__immut_list__',
  __data__: any[],
  __size__: number,
|}



//--------------------------- parsing node types ----------------------------//

export type ListShape = {| type: '__immut_list__', item: any    |}
export type MapShape  = {| type: '__immut_map__',  keys: Object |}


export type Shape = ListShape
                  | MapShape


export type Leaf = string
                 | number
                 | any



//------------------------------ common types -------------------------------//

export type Symbols = {|
  list: '__immut_list__',
  map: '__immut_map__',
|}


export type ErrorTypes = TypeError
                       | ReferenceError
                       | Error


export type Func = Function
