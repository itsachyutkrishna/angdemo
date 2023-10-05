import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() formInput: any;

add_cake(){
console.log(this.formInput)
}
}
