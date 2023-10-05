import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component'
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { DiscountPipe } from './discount.pipe';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    SignupformComponent,
    LoginformComponent,
    AddcakeComponent,
    HomeComponent,
    CakedetailsComponent,
    SearchComponent,
    CartComponent,
    CheckoutComponent,
    AddressComponent,
    PaymentComponent,
    CartsummaryComponent,
    DiscountPipe,
    OrderplacedComponent,
    MyordersComponent,
    PagenotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
