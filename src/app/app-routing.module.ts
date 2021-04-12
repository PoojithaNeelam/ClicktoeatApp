import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfooditemComponent } from './addfooditem/addfooditem.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AppComponent } from './app.component';
import { BillingaddressComponent } from './billingaddress/billingaddress.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClicktoeatComponent } from './clicktoeat/clicktoeat.component';
import { DefaultbgimgComponent } from './defaultbgimg/defaultbgimg.component';
import { DefaultnavbarComponent } from './defaultnavbar/defaultnavbar.component';
import { EditfoodComponent } from './editfood/editfood.component';
import { HelpComponent } from './help/help.component';
import { IcecreamComponent } from './icecream/icecream.component';
import { LegalComponent } from './legal/legal.component';
import { LoginComponent } from './login/login.component';
import { NonvegcategoryComponent } from './nonvegcategory/nonvegcategory.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReadfooditemComponent } from './readfooditem/readfooditem.component';
import { SignupComponent } from './signup/signup.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { VegcategoryComponent } from './vegcategory/vegcategory.component';
import { ViewfooditemsComponent } from './viewfooditems/viewfooditems.component';

const routes: Routes = [ 
  {path:"default",component:AppComponent},
  {path:"clicktoeat", component:ClicktoeatComponent},
  {path:"navbar",component:DefaultnavbarComponent},
  {path:"loginform",component:LoginComponent,children:[
    {path:"signup",component:SignupComponent},
  ]},
  {path:"signup",component:SignupComponent,children:[
    {path:"loginform",component:LoginComponent}
  ]},
  {path:"adminhomepage",component:AdminhomepageComponent},
    {path:"addfooditem",component:AddfooditemComponent},
    {path:"readfooditem",component:ReadfooditemComponent},
  
  {path:"bgimg",component:DefaultbgimgComponent},
  {path:"userhomepage",component:UserhomepageComponent},
  {path:"help",component:HelpComponent,children:[
    {path:"legal",component:LegalComponent},
    {path:"questions",component:QuestionsComponent}
  ]},
  {path:"edit",component:EditfoodComponent},
  {path:"cart",component:UsercartComponent},
  {path:"billingaddress",component:BillingaddressComponent},
    {path:"checkout",component:CheckoutComponent},
 
  {path:"viewfooditem",component:ViewfooditemsComponent},
  {path:"vegcategory",component:VegcategoryComponent},
  {path:"nonvegcategory",component:NonvegcategoryComponent},
  {path:"icecreamcategory",component:IcecreamComponent},
  {path:"userprofile",component:UserprofileComponent},
  {path:"",redirectTo:"/clicktoeat",pathMatch:"full"}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
