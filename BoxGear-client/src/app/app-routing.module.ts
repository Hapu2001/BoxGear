import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConsultingComponent } from './admin/consulting/consulting.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { DoashboardComponent } from './admin/doashboard/doashboard.component';
import { InvoiceComponent } from './admin/invoice/invoice.component';
import { DetailProductAdminComponent } from './admin/products-list/detail-product-admin/detail-product-admin.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { RevenueComponent } from './admin/revenue/revenue.component';


import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlogsComponent } from './user/blogs/blogs.component';
import { CartComponent } from './user/cart/cart.component';
import { DetailProductComponent } from './user/detail-product/detail-product.component';

import { HomeComponent } from './user/home/home.component';
import { PaymentComponent } from './user/payment/payment.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
{ path:'signup',component: SignUpComponent},
{ path:'signin',component: SignInComponent},
{
  path:'', redirectTo:'/signin', pathMatch:'full'
},
{path:'Admin', component:AdminComponent},
{path:'ProductsList', component: AdminComponent,
children:[{path:'',component:ProductsListComponent}]},
{path:'home',component:UserComponent,
children:[{path:'',component:HomeComponent}]},
{path:'cart', component:UserComponent,
children:[{path:'',component:CartComponent}]},
{path:'detailProduct/:id',component:UserComponent,
children:[{path:'',component:DetailProductComponent}]
},
{path:'doashboard',component:AdminComponent,
children:[{path:'',component:DoashboardComponent}]},
{path:'invoice',component:AdminComponent,
children:[{path:'',component:InvoiceComponent}]},
{path:'manageCustomer',component:AdminComponent,
children:[{path:'',component:CustomersComponent}]},
{
  path:'consulting', component:AdminComponent,
  children:[{path:'',component:ConsultingComponent}]
},
{
  path:'revenue',component:AdminComponent,
  children:[{path:'',component:RevenueComponent}]
},
{
  path:'detailProductAdmin/:id',component:AdminComponent,
  children:[{path:'',component: DetailProductAdminComponent}]
},
{path:'payment',component:UserComponent,
children:[{path:'',component:PaymentComponent}]},
{path:'blogs',component:UserComponent,
children:[{path:'',component:BlogsComponent}]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
