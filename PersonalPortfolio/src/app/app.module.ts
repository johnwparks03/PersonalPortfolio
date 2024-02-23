import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon'
import { WorkExperienceComponent } from './work-experience-component/work-experience.component';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './projects/store/projects.effects';
import { HttpClientModule } from '@angular/common/http';
import { projectsReducer } from './projects/store/projects.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule, NgFor } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';




@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    RouterOutlet,
    StoreModule.forRoot({repos: projectsReducer}, {}),
    EffectsModule.forRoot([ProjectsEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      name: 'Portfolio'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
