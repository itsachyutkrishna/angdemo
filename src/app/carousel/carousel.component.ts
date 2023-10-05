import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  // a:any=5; b:any=6; c:any;

  constructor(private cs:CommonService) {

    // this.c=cs.add(this.a,this.b);

    // alert(this.c);

   }

  ngOnInit(): void {
  }

}
