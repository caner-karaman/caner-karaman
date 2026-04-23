/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SitemapCategoryDTO } from '../models/SitemapCategoryDTO';
import type { SitemapPostDTO } from '../models/SitemapPostDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicSitemapApiService {
    /**
     * Get all post slugs for sitemap
     * Returns all published post slugs with their category slugs and last modified dates for a given domain and language.
     * @param domain The target website domain (e.g. is-hukuku.com)
     * @param lang The language code
     * @returns SitemapPostDTO OK
     * @throws ApiError
     */
    public static getSitemapPosts(
        domain: string,
        lang: string = 'tr',
    ): CancelablePromise<Array<SitemapPostDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/sitemap/posts',
            query: {
                'domain': domain,
                'lang': lang,
            },
        });
    }
    /**
     * Get all category slugs for sitemap
     * Returns all category slugs with last modified dates for a given domain and language.
     * @param domain The target website domain (e.g. is-hukuku.com)
     * @param lang The language code
     * @returns SitemapCategoryDTO OK
     * @throws ApiError
     */
    public static getSitemapCategories(
        domain: string,
        lang: string = 'tr',
    ): CancelablePromise<Array<SitemapCategoryDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/sitemap/categories',
            query: {
                'domain': domain,
                'lang': lang,
            },
        });
    }
}
