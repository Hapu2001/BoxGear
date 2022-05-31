import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { FormsModule } from '@angular/forms';

import { UserServiceService } from './services/user-service.service';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http'
import { ProductService } from './services/product.service';

import { AdminComponent } from './admin/admin.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './user/home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { DetailProductComponent } from './user/detail-product/detail-product.component';
import { DoashboardComponent } from './admin/doashboard/doashboard.component';
import { InvoiceComponent } from './admin/invoice/invoice.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { CustomersComponent } from './admin/customers/customers.component';
import { ConsultingComponent } from './admin/consulting/consulting.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { RevenueComponent } from './admin/revenue/revenue.component';
import { SupportService } from './services/support.service';
import { Ng2OrderModule} from 'ng2-order-pipe';
import { DetailProductAdminComponent } from './admin/products-list/detail-product-admin/detail-product-admin.component';
import { PaymentComponent } from './user/payment/payment.component';
import { BlogsComponent } from './user/blogs/blogs.component';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
  SignInComponent,
    AdminComponent,
    ProductsListComponent,
    HomeComponent,
    CartComponent,
    DetailProductComponent,
    DoashboardComponent,
    InvoiceComponent,
    CustomersComponent,
    ConsultingComponent,
    FilterPipe,
    RevenueComponent,
    DetailProductAdminComponent,
    PaymentComponent,
    BlogsComponent

    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
    }),
    NgxPaginationModule,
   Ng2OrderModule,
    Ng2SearchPipeModule
 
    
    
   

    


  ],
  providers: [UserServiceService, ProductService,SupportService],
  bootstrap: [AppComponent,CustomersComponent]
})
export class AppModule { }
