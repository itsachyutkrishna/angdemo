import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css'],
})
export class CakedetailsComponent implements OnInit {
  
  cakedetails: any = {
    name: '',
    image: '',
    price: '',
    reviews: '',
    description: '',
    flavour: '',
    weight: '1 Kg',
    type: '',
    likes: '',
    ingredients: '',
    owner: '',
    ratings: '',
    eggless: '',
    createdat: '',
    cakeid: '',
  };
  constructor(
    private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    var cakeid = this.route.snapshot['params']['cakeid'];
    var url = 'https://apifromashu.herokuapp.com/api/cake/' + cakeid;
    this.http.get(url).subscribe({
      next: (response: any) => {
        console.log('Response from cake details api', response);
        this.cakedetails = response.data;
      },
    });
  }

  addtocart() {
    if (localStorage['token']) {
      var url = 'https://apifromashu.herokuapp.com/api/addcaketocart';
      var body = {
        cakeid: this.cakedetails.cakeid,
        name: this.cakedetails.name,
        price: this.cakedetails.price,
        image: this.cakedetails.image,
        weight: this.cakedetails.weight,
      }
      let myheaders = new HttpHeaders();
      myheaders = myheaders.append('authtoken', localStorage['token']);
      this.http.post(url, body, {headers: myheaders,}).subscribe({
          next: (response: any) =>{
          console.log('response from api is', response)  
          if(response.data)
          this.router.navigate(['/cart'])
          }
          
            
            
        })
    } 
    else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {}
}
