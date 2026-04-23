/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactMessageDTO } from '../models/ContactMessageDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicContactApiService {
    /**
     * Submit a contact message
     * Submits a new contact message for a specific website domain.
     * @param domain The target website domain (e.g. is-hukuku.com)
     * @param requestBody
     * @returns ContactMessageDTO OK
     * @throws ApiError
     */
    public static submitMessage(
        domain: string,
        requestBody: ContactMessageDTO,
    ): CancelablePromise<ContactMessageDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/contact',
            query: {
                'domain': domain,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
