import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
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
  constructor(private DataService:DataService, private router:Router) { }
 

  registerUser():void{
        console.log(this.data)
        if(this.data.email.includes('@')){
        this.DataService.postUserDetails(this.data).subscribe({
          next: (data:any) => {
            console.log(data);
            this.router.navigateByUrl('');
          },
          error: (error:any) => {
            console.error('Error:', error);
          }
        });
      }
      }
  ngOnInit(): void {
  }

}






// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   myForm: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.myForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(4)]],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   onSubmit() {
//     if (this.myForm.valid) {
//       console.log('Form Submitted!', this.myForm.value);
//     }
//   }
// }
