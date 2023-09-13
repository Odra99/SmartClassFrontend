import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDashboardComponent } from './views/schedule-dashboard/schedule-dashboard.component';
import { AreasComponent } from './views/areas/areas.component';

const routes: Routes = [
  { path: '', component: ScheduleDashboardComponent },
  { path: 'areas', component: AreasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
