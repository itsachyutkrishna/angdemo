import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
  cartitems: any = [];
  totalprice: any = 0;
  cartmessage:any

  constructor(private http: HttpClient, cs: CommonService) {
    
    //accessing cart
    var url = 'https://apifromashu.herokuapp.com/api/cakecart';
    var body = {};
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    this.http
      .post(url, body, {headers: myheaders,}).subscribe({
        next: (response: any) => {
          console.log('response from cart api is', response);
          this.cartitems = response.data;
          this.cartmessage=response.message

          //sending cartitems aray to common service
          cs.cartdetails=this.cartitems
          
          //calculating total price
          this.cartitems.forEach((each: any) => {
            this.totalprice = this.totalprice + each.price * each.quantity;
            cs.totalcartprice=this.totalprice
          });

        },error: () => {
          console.log('Error in adding one cake');}
      });   
      
  }
   


  addonecake(index:any){
    var url = 'https://apifromashu.herokuapp.com/api/addcaketocart';
    var body={
      cakeid:this.cartitems[index].cakeid,
      name:this.cartitems[index].name,
      price:this.cartitems[index].price,
      image:this.cartitems[index].image,
      weight:this.cartitems[index].weight
    };
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    this.http.post(url, body, { headers: myheaders }).subscribe({
      next: (response: any) => {
        console.log('response from cart api is', response);
        if(response.message=='Added to cart'){
          this.cartitems[index].quantity++
          this.totalprice=this.totalprice+this.cartitems[index].price
        }
      },
      error: () => {
        console.log('Error in adding one cake');
      },
    });
  }

  removeonecake(index:any){
    
    var url = 'https://apifromashu.herokuapp.com/api/removeonecakefromcart';
    var body={
      cakeid: this.cartitems[index].cakeid,
    };
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    this.http.post(url, body, { headers: myheaders }).subscribe({
      next: (response: any) => {
        console.log('response from cart api is', response);
        if(response.message=='Removed  item from cart'){
          this.cartitems[index].quantity--
          this.totalprice=this.totalprice-this.cartitems[index].price
        }
      },
      error: () => {
        console.log('Error in removing one cake');
      },
    }); 
  }

  removecake(index:any) {
    var url = 'https://apifromashu.herokuapp.com/api/removecakefromcart';
    var body={
      cakeid: this.cartitems[index].cakeid
    };
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    this.http.post(url, body, { headers: myheaders }).subscribe({
      next: (response: any) => {
        console.log('response from cart api is', response);
        if(response.message=='Removed whole cake  item from cart'){
          this.totalprice=this.totalprice-(this.cartitems[index].price*this.cartitems[index].quantity)
          this.cartitems.splice(index,1)
        }
      },
      error: () => {
        console.log('Error in removing');
      },
    });
  }

  ngOnInit(): void {}
}
