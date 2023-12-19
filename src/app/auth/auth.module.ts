import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  {path: 'forgetPassword', component:ForgetPasswordComponent},
  {path: 'resetPassword', component:ResetPasswordComponent},
  {path: 'ChangePassword', component:ChangepasswordComponent},


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [AuthComponent, LoginComponent, ForgetPasswordComponent, ResetPasswordComponent, ChangepasswordComponent]
})
export class AuthModule { }