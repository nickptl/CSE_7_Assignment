import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent }
];
