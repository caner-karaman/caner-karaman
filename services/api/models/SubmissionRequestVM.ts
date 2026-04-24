/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubmissionRequestVM = {
    problemId: number;
    status: SubmissionRequestVM.status;
    programmingLanguage: string;
    runtimeMs?: number;
};
export namespace SubmissionRequestVM {
    export enum status {
        PENDING = 'PENDING',
        ACCEPTED = 'ACCEPTED',
        FAILED = 'FAILED',
        TIMEOUT = 'TIMEOUT',
        RUNTIME_ERROR = 'RUNTIME_ERROR',
        COMPILE_ERROR = 'COMPILE_ERROR',
    }
}

