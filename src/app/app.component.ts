import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angdemo';

  constructor( private http: HttpClient) {}


  cakeadd = {
    image: '',
    name: '',
    price: 0,
    desc: '',
    weight: 1,
    type: '',
    flavour: '',
  };

}
