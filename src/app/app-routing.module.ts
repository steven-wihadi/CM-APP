import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from "./pages/customer/customer.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { AboutComponent } from "./pages/about/about.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/customer/1', pathMatch: 'full' },
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
