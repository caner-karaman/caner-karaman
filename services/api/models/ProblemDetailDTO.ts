/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SolutionDTO } from './SolutionDTO';
import type { TagDTO } from './TagDTO';
export type ProblemDetailDTO = {
    id?: number;
    difficulty?: ProblemDetailDTO.difficulty;
    leetcodeUrl?: string;
    title?: string;
    slug?: string;
    description?: string;
    languageCode?: string;
    tags?: Array<TagDTO>;
    solutions?: Array<SolutionDTO>;
};
export namespace ProblemDetailDTO {
    export enum difficulty {
        EASY = 'EASY',
        MEDIUM = 'MEDIUM',
        HARD = 'HARD',
    }
}

