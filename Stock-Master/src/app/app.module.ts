import { NgModule } from '@angular/core';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
