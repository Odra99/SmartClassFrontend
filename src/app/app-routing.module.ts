import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDashboardComponent } from './views/schedule-dashboard/schedule-dashboard.component';
import { AreasComponent } from './views/areas/areas.component';
import { TeachersComponent } from './views/teachers/teachers.component';
import { ClassesComponent } from './views/classes/classes.component';
import { CoursesComponent } from './views/courses/courses.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { RestrictionsComponent } from './views/restrictions/restrictions.component';
import { PrioritiesComponent } from './views/priorities/priorities.component';
import { LoadFilesComponent } from './views/load-files/load-files.component';

const routes: Routes = [
  { path: '', component: ScheduleDashboardComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'restriction', component: RestrictionsComponent },
  { path: 'priority', component: PrioritiesComponent },
  { path: 'load-files', component: LoadFilesComponent },
  { path: 'statistics', component: ScheduleDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
