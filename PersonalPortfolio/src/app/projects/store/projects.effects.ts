import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProjectsActions from './projects.actions';
import { HttpClient } from '@angular/common/http';
import { EMPTY, catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { ProjectsGithubApiService } from '../services/projects-github-api.service';
import { repo } from '../models/repo';
import { Store } from '@ngrx/store';

@Injectable()
export class ProjectsEffects {
  loadRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.GetRepos),
      exhaustMap(() => {
        return this.githubProjectsService.getRepos().pipe(
          map((data) =>
            ProjectsActions.GetReposSuccess({
              repos: this.convertDataToRepos(data),
            })
          ),
          catchError(async () => ProjectsActions.GetReposFailure())
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private githubProjectsService: ProjectsGithubApiService
  ) {}

  convertDataToRepos(data: repo[]): repo[] {
    let repos: repo[] = [];
    let newRepo: repo;
    data.forEach((repo) => {
      newRepo = {
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
      };
      repos.push(newRepo);
    });
    return repos;
  }
}
