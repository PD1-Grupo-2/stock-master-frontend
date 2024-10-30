import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { RegisterSupplierComponent } from './suppliers/register/register-supplier/register-supplier.component';
//import { DashboardComponent } from './dashboard/dashboard.component'; //criar componente dashboard
//import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register-supplier', component: RegisterSupplierComponent},
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'forgot-password', component: ForgotPasswordComponent }
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/login' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
