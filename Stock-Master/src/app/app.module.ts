import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSupplierComponent } from './components/suppliers/register/register-supplier/register-supplier.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { RegisterClientComponent } from './components/clients/register-client/register-client.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { RegisterProductComponent } from './components/products/register-product/register-product.component';
import { SuppliersListComponent } from './components/suppliers/suppliers-list/suppliers-list.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AuthGuard } from './auth/auth.guard';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { NewSellOrderComponent } from './components/orders/new-sell-order/new-sell-order.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSupplierComponent,
    HomeComponent,
    HeaderComponent,
    BottomNavbarComponent,
    ClientListComponent,
    RegisterClientComponent,
    ProductListComponent,
    RegisterProductComponent,
    SuppliersListComponent,
    StockListComponent,
    OrderListComponent,
    NewSellOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule    

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
