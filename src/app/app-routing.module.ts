import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcakeComponent } from './addcake/addcake.component';
import { AddressComponent } from './address/address.component';
import { AppComponent } from './app.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CartComponent } from './cart/cart.component';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { SignupformComponent } from './signupform/signupform.component';


const routes: Routes = [

{path:"", component:HomeComponent},
{path:"login", component:LoginformComponent},
{path:"signup", component:SignupformComponent},
{path:"addcake", component:AddcakeComponent},
{path:"cakedetails/:cakeid", component:CakedetailsComponent},
{path:"search?q=", component:SearchComponent},
{path:"cart", component:CartComponent},
{path:"checkout", component:CheckoutComponent, children:[
  {path:"", component:CartsummaryComponent},
  {path:"cartsummary", component:CartsummaryComponent},
  {path:"address", component:AddressComponent},
  {path:"payment", component:PaymentComponent}
]},
{path:"orderplaced", component:OrderplacedComponent},
{path:"myorders", component:MyordersComponent},
{path:"**",component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
