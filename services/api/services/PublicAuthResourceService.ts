/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponseVM } from '../models/AuthResponseVM';
import type { CustomLoginVM } from '../models/CustomLoginVM';
import type { CustomRegisterVM } from '../models/CustomRegisterVM';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicAuthResourceService {
    /**
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static registerAccount(
        requestBody: CustomRegisterVM,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns AuthResponseVM OK
     * @throws ApiError
     */
    public static login(
        requestBody: CustomLoginVM,
    ): CancelablePromise<AuthResponseVM> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
