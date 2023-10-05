import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchresults:any

  constructor(private route:ActivatedRoute,private router: Router, private http:HttpClient) { 
  
    // var query=this.route.snapshot["queryParams"]["q"]
    // var url= "https://apifromashu.herokuapp.com/api/searchcakes?q="+query
    // this.http.get(url).subscribe({
    //   next:(response:any)=>{
    //     console.log("search response", response)
    //     this.searchresults=response.data
    //   }
    // })

    this.route.queryParams.subscribe((query:any)=>{
      var url= "https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q
      this.http.get(url).subscribe({
        next:(response:any)=>{
          console.log("response is: ", response)
          this.searchresults=response.data
          console.log(this.searchresults)
        }
      })
    })

   
  }

  ngOnInit(): void {
  }

}
