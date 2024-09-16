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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { MeResponseDto } from '../models';
/**
 * MeApi - axios parameter creator
 * @export
 */
export const MeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Me
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        me: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MeApi - functional programming interface
 * @export
 */
export const MeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MeApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Me
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async me(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MeResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.me(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MeApi.me']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MeApi - factory interface
 * @export
 */
export const MeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MeApiFp(configuration)
    return {
        /**
         * 
         * @summary Me
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        me(options?: any): AxiosPromise<MeResponseDto> {
            return localVarFp.me(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MeApi - interface
 * @export
 * @interface MeApi
 */
export interface MeApiInterface {
    /**
     * 
     * @summary Me
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeApiInterface
     */
    me(options?: RawAxiosRequestConfig): AxiosPromise<MeResponseDto>;

}

/**
 * MeApi - object-oriented interface
 * @export
 * @class MeApi
 * @extends {BaseAPI}
 */
export class MeApi extends BaseAPI implements MeApiInterface {
    /**
     * 
     * @summary Me
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeApi
     */
    public me(options?: RawAxiosRequestConfig) {
        return MeApiFp(this.configuration).me(options).then((request) => request(this.axios, this.basePath));
    }
}

