import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestrictionsConfigComponent } from './components/restrictions-config/restrictions-config.component';
import { SheduleConfigComponent } from './views/shedule-config/shedule-config.component';
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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestrictionsConfigComponent,
    SheduleConfigComponent,
    ScheduleComponent,
    IconComponent,
    ScheduleDashboardComponent,
    ToastComponent,
    ClassesComponent,
    TeachersComponent,
    AreasComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ColorPickerModule,
    NgbModule,
    FormsModule,
    NoopAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
