import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AreaConfigComponent } from './components/area-config/area-config.component';
import { RestrictionsConfigComponent } from './components/restrictions-config/restrictions-config.component';
import { ClassConfigComponent } from './components/class-config/class-config.component';
import { PriorityCriteriaConfigComponent } from './components/priority-criteria-config/priority-criteria-config.component';
import { CourseConfigComponent } from './components/course-config/course-config.component';
import { TeacherConfigComponent } from './components/teacher-config/teacher-config.component';
import { LoadFilesComponent } from './views/load-files/load-files.component';
import { SheduleConfigComponent } from './views/shedule-config/shedule-config.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AreaConfigComponent,
    RestrictionsConfigComponent,
    ClassConfigComponent,
    PriorityCriteriaConfigComponent,
    CourseConfigComponent,
    TeacherConfigComponent,
    LoadFilesComponent,
    SheduleConfigComponent,
    ScheduleComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
