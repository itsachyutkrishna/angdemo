import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  personaldata:any={
    name:"",
    address:"",
    city:"",
    pincode:"",
    phonenumber:""
  }

  constructor(private cs:CommonService, private router:Router) { 
      cs.cartcheckoutuser=this.personaldata
  }
  
  addaddress(){
    this.cs.isValidAddress=true
    
    console.log(this.personaldata)

    this.router.navigate(["checkout/payment"])
    }

  ngOnInit(): void {
  }

}
