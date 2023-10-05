import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cartsummary',
  templateUrl: './cartsummary.component.html',
  styleUrls: ['./cartsummary.component.css']
})
export class CartsummaryComponent implements OnInit {
  cartsummarycartdetails:any
  cartdetailstotalprice:any

  constructor(cs: CommonService) {
    this.cartsummarycartdetails=cs.cartdetails
    this.cartdetailstotalprice=cs.totalcartprice
   }

  ngOnInit(): void {
  }

}
