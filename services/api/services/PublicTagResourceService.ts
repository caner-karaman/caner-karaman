/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagListDTO } from '../models/TagListDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicTagResourceService {
    /**
     * @param websiteId
     * @param lang
     * @returns TagListDTO OK
     * @throws ApiError
     */
    public static getAllTags(
        websiteId: number,
        lang: string = 'tr',
    ): CancelablePromise<Array<TagListDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/tags',
            query: {
                'lang': lang,
                'websiteId': websiteId,
            },
        });
    }
}
