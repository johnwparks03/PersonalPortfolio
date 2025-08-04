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
  projects: project[][] = [];
  project_row: project[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    const projectsStore = this.store.select(ProjectSelectors.selectProjects);
    projectsStore.subscribe((project) => {
      project.projects.forEach((project) => {
        if (project.name.toLowerCase() != 'johnwparks03') {
          this.project_row.push(project);
          if (this.project_row.length === 3) {
            this.projects.push(this.project_row);
            this.project_row = [];
          }
        }
      });
      if (this.project_row.length > 0) {
        this.projects.push(this.project_row); // Push any remaining projects
        this.project_row = []; // Reset for next batch
      }
    });
  }
}
