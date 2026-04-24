/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagDTO } from './TagDTO';
export type ProblemListDTO = {
    id?: number;
    title?: string;
    slug?: string;
    difficulty?: ProblemListDTO.difficulty;
    tags?: Array<TagDTO>;
};
export namespace ProblemListDTO {
    export enum difficulty {
        EASY = 'EASY',
        MEDIUM = 'MEDIUM',
        HARD = 'HARD',
    }
}

