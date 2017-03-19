// @flow


/**
 * implementation for flow types
 * @author Leon Pearce <leonp1991@gmail.com>
 */


//---------------------------- immut data types -----------------------------//

export type Immut = List | Map


export type Map = {|
  __type__: '__Immut_Map__',
  __data__: Object,
  __size__: number,
|}


export type List = {|
  __type__: '__Immut_List__',
  __data__: Array<any>,
  __size__: number,
|}



//--------------------------- parsing node types ----------------------------//

export type ListShape = { type: '__Immut_List__', item: any    }
export type MapShape  = { type: '__Immut_Map__',  keys: Object }


export type Shape = ListShape
                  | MapShape


export type Leaf = string
                 | number
                 | any



//------------------------------ common types -------------------------------//

export type Symbols = {|
  List: '__Immut_List__',
  Map: '__Immut_Map__',
|}


export type ErrorTypes = TypeError
                       | Error


export type Func = Function