import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
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
import { ObesitySeminarComponent } from './university-honors/seminars/obesity-seminar/obesity-seminar.component';
import { UniversityHonorsComponent } from './university-honors/university-honors.component';
import { IntermediateCompositionComponent } from './university-honors/seminars/intermediate-composition/intermediate-composition.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LearningFromFailureComponent } from './university-honors/seminars/learning-from-failure/learning-from-failure.component';
import { StudyAbroadComponent } from './university-honors/seminars/study-abroad/study-abroad.component';
import { SafePipe } from './safe.pipe';
import { PdfViewerDialogComponent } from './pdf-viewer-dialog/pdf-viewer-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerDialogComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    ProjectsComponent,
    ObesitySeminarComponent,
    UniversityHonorsComponent,
    LearningFromFailureComponent,
    StudyAbroadComponent,
    IntermediateCompositionComponent,
    NotFoundComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    RouterOutlet,
    StoreModule.forRoot({ repos: projectsReducer }, {}),
    EffectsModule.forRoot([ProjectsEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      name: 'Portfolio',
    }),
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
