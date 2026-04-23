/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebsiteDTO } from './WebsiteDTO';
export type ContactMessageDTO = {
    id?: number;
    fullName: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    isRead?: boolean;
    ipAddress?: string;
    submittedDate?: string;
    website?: WebsiteDTO;
};

