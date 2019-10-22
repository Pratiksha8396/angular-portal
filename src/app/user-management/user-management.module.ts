import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[RouterModule, ]
})
export class UserManagementModule { }
