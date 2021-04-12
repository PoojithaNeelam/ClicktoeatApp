import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultnavbarComponent } from './defaultnavbar/defaultnavbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DefaultbgimgComponent } from './defaultbgimg/defaultbgimg.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { FooterComponent } from './footer/footer.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClicktoeatComponent } from './clicktoeat/clicktoeat.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AddfooditemComponent } from './addfooditem/addfooditem.component';
import { FooditemlistComponent } from './fooditemlist/fooditemlist.component';
import { ReadfooditemComponent } from './readfooditem/readfooditem.component';
import { AuthorizationService } from './authorization.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HelpComponent } from './help/help.component';
import { LegalComponent } from './legal/legal.component';
import { QuestionsComponent } from './questions/questions.component';
import { EditfoodComponent } from './editfood/editfood.component';
import { UsercartComponent } from './usercart/usercart.component';
import { ViewfooditemsComponent } from './viewfooditems/viewfooditems.component';
import { SearchPipe } from './search.pipe';
import { VegcategoryComponent } from './vegcategory/vegcategory.component';
import { NonvegcategoryComponent } from './nonvegcategory/nonvegcategory.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { IcecreamComponent } from './icecream/icecream.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { BillingaddressComponent } from './billingaddress/billingaddress.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultnavbarComponent,
    LoginComponent,
    SignupComponent,
    DefaultbgimgComponent,
    PrecautionsComponent,
    FooterComponent,
    UserhomepageComponent,
    ClicktoeatComponent,
    CarouselComponent,
    AdminhomepageComponent,
    AddfooditemComponent,
    FooditemlistComponent,
    ReadfooditemComponent,
    HelpComponent,
    LegalComponent,
    QuestionsComponent,
    EditfoodComponent,
    UsercartComponent,
    ViewfooditemsComponent,
    SearchPipe,
    VegcategoryComponent,
    NonvegcategoryComponent,
    UsernavbarComponent,
    IcecreamComponent,
    UserprofileComponent,
    BillingaddressComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule
   
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthorizationService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
