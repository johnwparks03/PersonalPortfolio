import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { repo } from '../models/repo';

@Injectable({
  providedIn: 'root'
})
export class ProjectsGithubApiService {

  constructor(
    private http: HttpClient
  ) { }

  getRepos() {
    return this.http.get<repo[]>("https://api.github.com/users/johnwparks03/repos")
  }
}
