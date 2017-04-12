// @flow
import symbols from '../consts/symbols'


type isType = (u: any) => boolean


/**
 * identifies if u is an immutabled type
 *
 * @name isImmut
 * @param  {any} u entity to identify if is an immutabled type
 * @return {bool} whether the entity is an immutabled type
 * @since 0.0.1
 */
export const isImmut: isType = u => u && Object.values(symbols).includes(u.__type__)


/**
 * identifies if u is a list type
 *
 * @name isList
 * @param  {any} u entity to identify if is a list type
 * @return {bool} whether the entity is a list type
 * @since 0.0.1
 */
export const isList: isType = u => !!u && u.__type__ === symbols.list


/**
 * identifies if u is a map type
 *
 * @name isMap
 * @param  {any} u entity to identify if is a map type
 * @return {bool} whether the entity is a map type
 * @since 0.0.1
 */
export const isMap: isType = u => !!u && u.__type__ === symbols.map


/**
 * identifies if u is an array type
 *
 * @name isArray
 * @param  {any} u entity to identify if is an array type
 * @return {bool} whether the entity is an array type
 * @since 0.0.1
 */
export const isArray: isType = u => !!u && Array.isArray(u)


/**
 * identifies if u is an object type
 *
 * @name isObject
 * @param  {any} u entity to identify if is an object type
 * @return {bool} whether the entity is an object type
 * @since 0.0.1
 */
export const isObject: isType =
  u => !!u
    && u === Object(u)
    && !Array.isArray(u)
    && !Object.values(symbols).includes(u.__type__)


/**
 * identifies if u is a primitive type
 *
 * @name isPrimitive
 * @param  {any} u entity to identify if is a primitive type
 * @return {bool} whether the entity is a primitive type
 * @since 0.0.1
 */
export const isPrimitive: isType =
  u => u !== undefined
    && u !== null
    && (  u === ''
       || u === 0
       || u !== Object(u)
       || Number.isNaN(u) )
