import { createReducer, on } from '@ngrx/store';
import * as ProjectsActions from './projects.actions';
import { project } from '../models/project';

export interface State {
  projects: project[];
}

export const initialState: State = {
  projects: [],
};

export const projectsReducer = createReducer(
  initialState,
  on(ProjectsActions.GetProjects, (state) => ({ ...state })),
  on(ProjectsActions.GetProjectsSuccess, (state, { projects }) => ({
    projects: projects,
  })),
  on(ProjectsActions.GetProjectsFailure, (state) => ({ projects: [] }))
);
