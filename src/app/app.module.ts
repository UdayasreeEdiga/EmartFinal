import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import {ActivatedRoute} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ElectonicComponent } from './electonic/electonic.component';
import { ClothesComponent } from './clothes/clothes.component';
import { GroceriesComponent } from './groceries/groceries.component';


import { WatchesComponent } from './watches/watches.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TvComponent } from './tv/tv.component';
import { WomensComponent } from './womens/womens.component';
import { MensComponent } from './mens/mens.component';
import { KidsComponent } from './kids/kids.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';



import { CartComponent } from './cart/cart.component';


import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { FinalComponent } from './final/final.component';
import { PaymentComponent } from './payment/payment.component';

import { Product1Component } from './product1/product1.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { Header1Component } from './header1/header1.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProductComponent,
    CategoryComponent,
    HomeComponent,
    Product1Component,
    ContactComponent,
    ElectonicComponent,
    ClothesComponent,
    GroceriesComponent,
   
    
    WatchesComponent,
    MobilesComponent,
    TvComponent,
    WomensComponent,
    MensComponent,
    KidsComponent,
    VegetablesComponent,
    FruitsComponent,
   
    AddproductComponent,
    CartComponent,
    PaymentComponent,

    SellerSignupComponent,
    HeaderComponent,
    SellerLoginComponent,
    FinalComponent,
    Header1Component,


 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
