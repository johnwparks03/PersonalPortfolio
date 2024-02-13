import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience-component/work-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { UniversityHonorsComponent } from './university-honors/university-honors.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'university-honors', component: UniversityHonorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
