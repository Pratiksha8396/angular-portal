import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { HeaderComponent } from '../common/header/header.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }, {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [RouterModule]
})
export class PortalModule { }
