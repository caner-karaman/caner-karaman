/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDTO } from './CategoryDTO';
import type { FaqItemDTO } from './FaqItemDTO';
import type { TagDTO } from './TagDTO';
import type { WebsiteDTO } from './WebsiteDTO';
export type PostDTO = {
    id?: number;
    featuredImage?: string;
    publishedDate?: string;
    isPublished?: boolean;
    viewCount?: number;
    website: WebsiteDTO;
    tagses?: Array<TagDTO>;
    category?: CategoryDTO;
    faqs?: Array<FaqItemDTO>;
};

