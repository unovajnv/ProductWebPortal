import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dataService:DataService, private router:Router) { }
  allUsers:any[] = [];
  email: string='';
  password: string='';

  login(){
    this.dataService.getUsers().subscribe((data:any) => {
      this.allUsers = data;
      if(this.allUsers.some(user => user.email === this.email && user.password === this.password)){
        console.log("Login Successful");
        //Navigate to home page or dashboard page
        this.router.navigate(['/dashboard']);
      }else{
        console.log("Invalid Credentials");
      }
    });
   }
  ngOnInit(): void {
  }

}
