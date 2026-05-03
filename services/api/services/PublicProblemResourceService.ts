/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetailDTO } from '../models/ProblemDetailDTO';
import type { ProblemListDTO } from '../models/ProblemListDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicProblemResourceService {
    /**
     * @param lang
     * @param title
     * @param difficulty
     * @param tagIds
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns ProblemListDTO OK
     * @throws ApiError
     */
    public static getAllProblems(
        lang: string = 'tr',
        title?: string,
        difficulty?: 'EASY' | 'MEDIUM' | 'HARD',
        tagIds?: Array<number>,
        page?: number,
        size: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<Array<ProblemListDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/problems',
            query: {
                'lang': lang,
                'title': title,
                'difficulty': difficulty,
                'tagIds': tagIds,
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
    /**
     * @param slug
     * @param lang
     * @returns ProblemDetailDTO OK
     * @throws ApiError
     */
    public static getProblemBySlug(
        slug: string,
        lang: string = 'tr',
    ): CancelablePromise<ProblemDetailDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/problems/{slug}',
            path: {
                'slug': slug,
            },
            query: {
                'lang': lang,
            },
        });
    }
}
