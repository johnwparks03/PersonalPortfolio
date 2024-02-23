import { Component, OnInit } from '@angular/core';
import * as ProjectsActions from './store/projects.actions';
import * as ProjectSelectors from './store/projects.selector';
import { Store } from '@ngrx/store';
import { repo } from './models/repo';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  repos: repo[] = []

  constructor(private store: Store) {}

  ngOnInit() {
    const repo = this.store.select(ProjectSelectors.selectRepos);
    repo.subscribe(repo => repo.repos.forEach(repo => {
      if (repo.name != "johnwparks03") {
        this.repos.push(repo);
      }
    }))

  }
}
