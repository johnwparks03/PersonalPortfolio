import { createAction, props } from "@ngrx/store";
import { repo } from "../models/repo"

export const GetRepos = createAction('[Projects] Get Repos')
export const GetReposSuccess = createAction('[Projects] Get Repos Success', props<{ repos: repo[] }>())
export const GetReposFailure = createAction('[Projects] Get Repos Failure');
