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



/**
 * 
 * @export
 * @interface CreateSchoolRequestDto
 */
export interface CreateSchoolRequestDto {
    /**
     * 
     * @type {string}
     * @memberof CreateSchoolRequestDto
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateSchoolRequestDto
     */
    'addressLine1': string;
    /**
     * 
     * @type {string}
     * @memberof CreateSchoolRequestDto
     */
    'addressLine2'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSchoolRequestDto
     */
    'city': string;
    /**
     * 
     * @type {string}
     * @memberof CreateSchoolRequestDto
     */
    'zip': string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSchoolRequestDto
     */
    'active': boolean;
}

