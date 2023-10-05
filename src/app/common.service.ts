import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  cartdetails:any=[]
  cartcheckoutuser:any=[]
  totalcartprice:any

  isValidAddress:any=false

  // add(a:number,b:number){
  //   return a+b;
  // }

  constructor() { }
}
