/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ToggleSolvedResponseDTO } from '../models/ToggleSolvedResponseDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicUserProblemResourceService {
    /**
     * @param problemId
     * @returns ToggleSolvedResponseDTO OK
     * @throws ApiError
     */
    public static toggleSolved(
        problemId: number,
    ): CancelablePromise<ToggleSolvedResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/user-problems/toggle/{problemId}',
            path: {
                'problemId': problemId,
            },
        });
    }
    /**
     * @returns number OK
     * @throws ApiError
     */
    public static getSolvedProblemIds(): CancelablePromise<Array<number>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/user-problems/solved-ids',
        });
    }
}
