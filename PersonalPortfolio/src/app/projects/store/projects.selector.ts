import { createFeatureSelector } from "@ngrx/store";
import { repo } from "../models/repo";

export const featureKey = 'repos';

export interface Repos {
    repos: repo[]
}

export const selectRepos = createFeatureSelector<Repos>(featureKey);