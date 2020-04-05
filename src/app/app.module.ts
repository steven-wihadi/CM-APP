import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ToolBarCustomerComponent } from './pages/customer/component/tool-bar-customer/tool-bar-customer.component';
import { ViewDataComponent } from './pages/customer/component/view-data/view-data.component';
import { PaginationComponent } from './shared/component/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    ToolBarCustomerComponent,
    ViewDataComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
