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
import type { SchoolDto } from './school-dto';

/**
 * 
 * @export
 * @interface GetSchoolResponseDto
 */
export interface GetSchoolResponseDto {
    /**
     * 
     * @type {SchoolDto}
     * @memberof GetSchoolResponseDto
     */
    'data': SchoolDto;
    /**
     * 
     * @type {string}
     * @memberof GetSchoolResponseDto
     */
    'message': string;
    /**
     * 
     * @type {boolean}
     * @memberof GetSchoolResponseDto
     */
    'success': boolean;
}

