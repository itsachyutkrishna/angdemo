import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  error:any
  
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  message:any

  user:any={
    name:"",
    email:"",
    password:""
    }
  signup(){
    
    var url="https://apifromashu.herokuapp.com/api/register"
    this.http.post(url,this.user).subscribe({
      next:(response:any)=>{
        console.log("Response from api is", response)
        this.message=response.message
      },error:()=>{}

    })
  }
}
