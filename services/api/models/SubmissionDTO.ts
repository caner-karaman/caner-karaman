/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubmissionDTO = {
    id?: number;
    problemTitle?: string;
    problemSlug?: string;
    status?: SubmissionDTO.status;
    programmingLanguage?: string;
    runtimeMs?: number;
    submittedAt?: string;
};
export namespace SubmissionDTO {
    export enum status {
        PENDING = 'PENDING',
        ACCEPTED = 'ACCEPTED',
        FAILED = 'FAILED',
        TIMEOUT = 'TIMEOUT',
        RUNTIME_ERROR = 'RUNTIME_ERROR',
        COMPILE_ERROR = 'COMPILE_ERROR',
    }
}

