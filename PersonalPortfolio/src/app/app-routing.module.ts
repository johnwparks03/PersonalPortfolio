import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience-component/work-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/about-me' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
