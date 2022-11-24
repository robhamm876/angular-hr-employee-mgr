import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeManagerComponent } from './components/employee-manager/employee-manager.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '', redirectTo: 'human-resources/admin', pathMatch : 'full'},
  {path : 'human-resources/admin', component : EmployeeManagerComponent},
  {path: 'human-resources/add', component : AddEmployeeComponent},
  {path: 'human-resources/edit', component : EditEmployeeComponent},
  {path: 'human-resources/view', component : ViewEmployeeComponent},
  {path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
