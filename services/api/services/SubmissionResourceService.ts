/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubmissionDTO } from '../models/SubmissionDTO';
import type { SubmissionRequestVM } from '../models/SubmissionRequestVM';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubmissionResourceService {
    /**
     * @param lang
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns SubmissionDTO OK
     * @throws ApiError
     */
    public static getAllSubmissions(
        lang: string = 'tr',
        page?: number,
        size: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<Array<SubmissionDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/submissions',
            query: {
                'lang': lang,
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SubmissionDTO OK
     * @throws ApiError
     */
    public static createSubmission(
        requestBody: SubmissionRequestVM,
    ): CancelablePromise<SubmissionDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/submissions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
