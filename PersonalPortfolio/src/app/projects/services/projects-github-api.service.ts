import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsGithubApiService {
  constructor(private http: HttpClient) {}

  getRepos() {
    return this.http.get<project[]>(
      'https://api.github.com/users/johnwparks03/repos'
    );
  }
}
