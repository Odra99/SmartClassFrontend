import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestrictionsConfigComponent } from './components/restrictions-config/restrictions-config.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { IconComponent } from './components/icon/icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleDashboardComponent } from './views/schedule-dashboard/schedule-dashboard.component';
import { ToastComponent } from './components/toast/toast.component';
import { ClassesComponent } from './views/classes/classes.component';
import { TeachersComponent } from './views/teachers/teachers.component';
import { AreasComponent } from './views/areas/areas.component';
import { CoursesComponent } from './views/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { RestrictionsComponent } from './views/restrictions/restrictions.component';
import { PrioritiesComponent } from './views/priorities/priorities.component';
import { TranslocoRootModule } from './transloco-root.module';
import { LoadFilesComponent } from './views/load-files/load-files.component';
import { CoursesAssignmentsComponent } from './views/courses-assignments/courses-assignments.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestrictionsConfigComponent,
    ScheduleComponent,
    IconComponent,
    ScheduleDashboardComponent,
    ToastComponent,
    ClassesComponent,
    TeachersComponent,
    AreasComponent,
    CoursesComponent,
    RestrictionsComponent,
    PrioritiesComponent,
    LoadFilesComponent,
    CoursesAssignmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ColorPickerModule,
    NgbModule,
    FormsModule,
    NoopAnimationsModule,
    DragDropModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
