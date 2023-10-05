import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  constructor(private router: Router) {


  }

  isUserLoggedIn: any = false;

  ngDoCheck() {
    if (localStorage['token']) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }

  ngOnInit(): void {}

  title: any = "Achyut Krishna's Cake Shop";

  searchtext: any;

  logout() {
    localStorage.clear();
  }
  search() {
    if (this.searchtext) {
      this.router.navigate(['/search?q='],{queryParams:{q:this.searchtext}})
    }
  }
}
