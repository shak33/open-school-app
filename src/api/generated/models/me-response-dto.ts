/* tslint:disable */
/* eslint-disable */
/**
 * API
 * API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CurrentUserDto } from './current-user-dto';

/**
 * 
 * @export
 * @interface MeResponseDto
 */
export interface MeResponseDto {
    /**
     * 
     * @type {CurrentUserDto}
     * @memberof MeResponseDto
     */
    'data': CurrentUserDto;
    /**
     * 
     * @type {string}
     * @memberof MeResponseDto
     */
    'message': string;
    /**
     * 
     * @type {boolean}
     * @memberof MeResponseDto
     */
    'success': boolean;
}

