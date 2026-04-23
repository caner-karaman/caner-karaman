/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardStatsDTO } from '../models/DashboardStatsDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DashboardResourceService {
    /**
     * @returns DashboardStatsDTO OK
     * @throws ApiError
     */
    public static getDashboardStats(): CancelablePromise<DashboardStatsDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/dashboard/stats',
        });
    }
}
