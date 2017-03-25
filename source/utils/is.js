// @flow
import symbols from '../consts/symbols'


type isType = (u: any) => boolean


export const isList: isType = u => !!u && u.__type__ === symbols.list


export const isMap: isType = u => !!u && u.__type__ === symbols.map


export const isArray: isType = u => !!u && Array.isArray(u)


export const isObject: isType =
  u => !!u
    && u === Object(u)
    && !Array.isArray(u)
    && !Object.values(symbols).includes(u.__type__)


export const isPrimitive: isType =
  u => u !== undefined
    && u !== null
    && (  u === ''
       || u === 0
       || u !== Object(u)
       || Number.isNaN(u) )
