/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostDTO } from './PostDTO';
export type PostTranslationDTO = {
    id?: number;
    languageCode: string;
    title: string;
    slug: string;
    summary?: string;
    content?: string;
    metaTitle?: string;
    metaDescription?: string;
    excerpt?: string;
    categorySlug?: string;
    modifiedDate?: string;
    post: PostDTO;
};

