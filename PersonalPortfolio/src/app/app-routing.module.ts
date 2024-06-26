import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience-component/work-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { UniversityHonorsComponent } from './university-honors/university-honors.component';
import { ObesitySeminarComponent } from './university-honors/seminars/obesity-seminar/obesity-seminar.component';
import { IntermediateCompositionComponent } from './university-honors/seminars/intermediate-composition/intermediate-composition.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LearningFromFailureComponent } from './university-honors/seminars/learning-from-failure/learning-from-failure/learning-from-failure.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'university-honors', component: UniversityHonorsComponent },
  { path: 'global-obesity-epidemic-seminar', component: ObesitySeminarComponent },
  { path: 'intermediate-composition', component: IntermediateCompositionComponent },
  { path: 'learning-from-failure', component: LearningFromFailureComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
