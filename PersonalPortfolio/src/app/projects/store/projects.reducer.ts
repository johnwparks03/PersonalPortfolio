import { createReducer, on } from "@ngrx/store"
import  *  as ProjectsActions from "./projects.actions"
import { repo } from "../models/repo"

export interface State {
    repos: repo[]
}

export const initialState: State = {
    repos: []
}

export const projectsReducer = createReducer(
    initialState,
    on(ProjectsActions.GetRepos, state => ({ ...state })),
    on(ProjectsActions.GetReposSuccess, (state, { repos }) => ({
        repos: repos
    })),
    on(ProjectsActions.GetReposFailure, state => ({repos: []}))
)