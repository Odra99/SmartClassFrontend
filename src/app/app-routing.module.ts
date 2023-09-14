import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDashboardComponent } from './views/schedule-dashboard/schedule-dashboard.component';
import { AreasComponent } from './views/areas/areas.component';
import { TeachersComponent } from './views/teachers/teachers.component';
import { ClassesComponent } from './views/classes/classes.component';

const routes: Routes = [
  { path: '', component: ScheduleDashboardComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'classes', component: ClassesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
