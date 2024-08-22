import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
 data:any ={
  name:'',
  mbNumber:'',
  email:'',
  password:'',
 }
  constructor(private DataService:DataService) { }
 

  registerUser():void{
        console.log(this.data)
        this.DataService.postUserDetails(this.data).subscribe({
          next: (data:any) => {
            console.log(data);
          },
          error: (error:any) => {
            console.error('Error:', error);
          }
        });
      }
  ngOnInit(): void {
  }

}
