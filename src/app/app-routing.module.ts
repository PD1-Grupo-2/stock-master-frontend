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
import { AuthGuard } from './auth/auth.guard';
import { RegisterProductComponent } from './components/products/register-product/register-product.component';
import { environment } from './environments/environment';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { NewSellOrderComponent } from './components/orders/new-sell-order/new-sell-order.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { SuppliersListComponent } from './components/suppliers/suppliers-list/suppliers-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'new-user', component: RegisterComponent },
  { path: 'register-supplier', component: RegisterSupplierComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'register-product', component: RegisterProductComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'product-list', component: ProductListComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'client-list', component: ClientListComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'supplier-list', component: SuppliersListComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'stock-list', component: StockListComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'order-list', component: OrderListComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'new-sell-order', component: NewSellOrderComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'new-product', component: RegisterProductComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: 'configurations', component: ConfigurationsComponent, canActivate: environment.bypassAuth ? [] : [AuthGuard] },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
