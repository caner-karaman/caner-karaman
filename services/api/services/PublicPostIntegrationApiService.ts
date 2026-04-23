/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostTranslationDTO } from '../models/PostTranslationDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicPostIntegrationApiService {
    /**
     * List all posts by domain
     * Retrieves all published post translations for a given website domain and language.
     * @param domain The target website domain (e.g. is-hukuku.com)
     * @param lang The language code for translations
     * @returns PostTranslationDTO OK
     * @throws ApiError
     */
    public static getAllPosts(
        domain: string,
        lang: string = 'tr',
    ): CancelablePromise<Array<PostTranslationDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/posts',
            query: {
                'domain': domain,
                'lang': lang,
            },
        });
    }
    /**
     * Get a single post by slug
     * Fetches the details of a specific post using its category slug, post slug, website domain and language.
     * @param categorySlug URL-friendly slug of the category
     * @param slug URL-friendly slug of the post
     * @param domain The target website domain (e.g. is-hukuku.com)
     * @param lang The language code for the translation
     * @returns PostTranslationDTO OK
     * @throws ApiError
     */
    public static getPostBySlug(
        categorySlug: string,
        slug: string,
        domain: string,
        lang: string = 'tr',
    ): CancelablePromise<PostTranslationDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/posts/{categorySlug}/{slug}',
            path: {
                'categorySlug': categorySlug,
                'slug': slug,
            },
            query: {
                'domain': domain,
                'lang': lang,
            },
        });
    }
}
