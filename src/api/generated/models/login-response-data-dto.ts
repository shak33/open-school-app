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
import type { MeResponseDataDto } from './me-response-data-dto';

/**
 * 
 * @export
 * @interface LoginResponseDataDto
 */
export interface LoginResponseDataDto {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDataDto
     */
    'token': string;
    /**
     * 
     * @type {MeResponseDataDto}
     * @memberof LoginResponseDataDto
     */
    'user': MeResponseDataDto;
}

