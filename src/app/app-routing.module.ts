import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: 'src/app/user-management/user-management.module#UserManagementModule'
  },
  {
    path: 'portal', loadChildren: 'src/app/portal/portal.module#PortalModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
