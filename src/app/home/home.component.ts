import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  cakeresponse: any = [];

  ngOnInit(): void {
    var url = 'https://apifromashu.herokuapp.com/api/allcakes';
    this.http.get(url).subscribe({
      next: (response: any) => {
        this.cakeresponse = response.data;
      },
    });
  }

}
