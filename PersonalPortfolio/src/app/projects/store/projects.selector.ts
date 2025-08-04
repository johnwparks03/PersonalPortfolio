import { createFeatureSelector } from '@ngrx/store';
import { project } from '../models/project';

export const featureKey = 'repos';

export interface Projects {
  projects: project[];
}

export const selectProjects = createFeatureSelector<Projects>(featureKey);
