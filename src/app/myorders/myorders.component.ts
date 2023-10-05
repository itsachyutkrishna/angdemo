import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  myorders:any=[]

  constructor(private http: HttpClient) { 

    var url = 'https://apifromashu.herokuapp.com/api/cakeorders';
    var body = {};
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    this.http.post(url, body, {headers: myheaders,}).subscribe({
        next: (response: any) => {
          console.log('response from cart api is', response);
          this.myorders=response.cakeorders
        },
        error: () => {
          console.log('Error in showing orders');}
      });   
  }

  ngOnInit(): void {
  }

}
