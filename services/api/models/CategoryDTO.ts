/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FaqItemDTO } from './FaqItemDTO';
import type { WebsiteDTO } from './WebsiteDTO';
export type CategoryDTO = {
    id?: number;
    imagePath?: string;
    createdDate?: string;
    updatedDate?: string;
    website: WebsiteDTO;
    faqs?: Array<FaqItemDTO>;
};

