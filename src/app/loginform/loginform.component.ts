import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  error: any;

  userdetails: any = {
    email: '',
    password: '',
  };

  login() {
    var url = 'https://apifromashu.herokuapp.com/api/login';
    this.http.post(url, this.userdetails).subscribe({
      next: (response: any) => {
        console.log('Response from api is', response);
        if (response.token) {
          localStorage['token'] = response.token;
          this.router.navigate(['/']);
        } else {
          this.error = 'Invalid Credentials';
        }
      },
      error: () => {},
    });
  }
}
