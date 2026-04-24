/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserSolvedProblemDTO = {
    title?: string;
    slug?: string;
    difficulty?: UserSolvedProblemDTO.difficulty;
    solvedDate?: string;
};
export namespace UserSolvedProblemDTO {
    export enum difficulty {
        EASY = 'EASY',
        MEDIUM = 'MEDIUM',
        HARD = 'HARD',
    }
}

