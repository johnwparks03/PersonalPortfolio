import { createAction, props } from '@ngrx/store';
import { project } from '../models/project';

export const GetProjects = createAction('[Projects] Get Repos');
export const GetProjectsSuccess = createAction(
  '[Projects] Get Projects Success',
  props<{ projects: project[] }>()
);
export const GetProjectsFailure = createAction(
  '[Projects] Get Projects Failure'
);
