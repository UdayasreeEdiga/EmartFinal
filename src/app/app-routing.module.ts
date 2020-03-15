import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
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

import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';



import { from } from 'rxjs';


import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { RegistrationComponent } from './registration/registration.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { FinalComponent } from './final/final.component';
import { PaymentComponent } from './payment/payment.component';

import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';
import { AddproductComponent } from './addproduct/addproduct.component';



const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'newuser',component:RegistrationComponent},
    {path:'existinguser',component:LoginComponent},
    {path:'cat',component:CategoryComponent},
    {path:'contact',component:ContactComponent},
    {path: 'prd',component:ProductComponent},
    {path:'ele',component:ElectonicComponent},
    {path:'clth',component:ClothesComponent},
    {path:'gre',component:GroceriesComponent},
    
    {path:'wat',component:WatchesComponent},
    {path:'mb',component:MobilesComponent},
    {path:'tv',component:TvComponent},
    {path:'wm',component:WomensComponent},
    {path:'men',component:MensComponent},
    {path:'kid',component:KidsComponent},
    {path:'fr',component:FruitsComponent},
    {path:'ve',component:VegetablesComponent},    
    {path:'cart',component:CartComponent},
    {path:'pay',component:PaymentComponent},
    
    {path:'adp',component:AddproductComponent},
    {path:'sup',component:SellerSignupComponent},
    {path:'new',component:SellerLoginComponent},
    {path:'ty',component:FinalComponent},
    {path: 'prdt',component:Product1Component},
    {path: 'cts',component:ContactComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
