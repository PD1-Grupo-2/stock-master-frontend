import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { RegisterSupplierComponent } from './components/suppliers/register/register-supplier/register-supplier.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
//import { DashboardComponent } from './dashboard/dashboard.component'; //criar componente dashboard
//import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'new-user', component: RegisterComponent},
  {path: 'register-supplier', component: RegisterSupplierComponent},
  { path: 'product-list', component: ProductListComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'supplier-list', component: RegisterSupplierComponent },
  { path: 'stock-list', component: StockListComponent },

  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'forgot-password', component: ForgotPasswordComponent }
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
