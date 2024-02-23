import { TestBed } from '@angular/core/testing';

import { ProjectsGithubApiService } from './projects-github-api.service';

describe('ProjectsGithubApiService', () => {
  let service: ProjectsGithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsGithubApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
