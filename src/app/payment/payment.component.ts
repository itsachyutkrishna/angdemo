import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cartdetailsforpayment:any=[]
  personaldetails:any=[]
  cartdetailsprice:any

  constructor(private http:HttpClient, private cs:CommonService , private router:Router) { 

    this.cartdetailsforpayment=cs.cartdetails

    this.personaldetails=cs.cartcheckoutuser

    this.cartdetailsprice=cs.totalcartprice

    console.log(this.cartdetailsforpayment,this.personaldetails, this.cartdetailsprice)

    if(!this.cs.isValidAddress){
      this.router.navigate(["/checkout/payment"])
    }
  }
 
  placeorder(){
      var url="https://apifromashu.herokuapp.com/api/addcakeorder"
      var body:any={
        name:this.personaldetails.name,
        cakes:this.cartdetailsforpayment,
        price:this.cartdetailsprice,
        address:this.personaldetails.address,
        city:this.personaldetails.city,
        pincode:this.personaldetails.pincode,
        phone:this.personaldetails.phonenumber
      }
      var myheaders=new HttpHeaders();
      myheaders=myheaders.append("authtoken", localStorage['token'])
      this.http.post(url,body,{headers:myheaders}).subscribe({
        next:(response:any)=>{
          console.log("response from api is:",response);

        }, error:()=>{
          console.log("Error in Payment")
        }
      })  
      }


  ngOnInit(): void {
  }

}
