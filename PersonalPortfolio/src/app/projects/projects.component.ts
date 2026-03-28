import { Component, OnInit } from '@angular/core';
import * as ProjectsActions from './store/projects.actions';
import * as ProjectSelectors from './store/projects.selector';
import { Store } from '@ngrx/store';
import { project } from './models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: project[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    const projectsStore = this.store.select(ProjectSelectors.selectProjects);
    projectsStore.subscribe((projectsState) => {
      this.projects = projectsState.projects.filter(
        (project) => project.name.toLowerCase() != 'johnwparks03'
      );
    });
  }
}
