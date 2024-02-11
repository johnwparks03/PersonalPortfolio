import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon'
import { WorkExperienceComponent } from './work-experience-component/work-experience.component';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';




@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
