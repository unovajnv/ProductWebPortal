import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataService:DataService) { }
  review:string='';
  
  ngOnInit(): void {
   // console.log(this.data.name);
  }
  
  submitReview():void {
    console.log("review is ",this.review);
    const data1:any[]=this.data.reviews
    data1.push(this.review);
    const dataToPus={
      "reviews":data1
    }
    console.log("data is ",dataToPus,this.data.id);
    this.dataService.postReview(dataToPus,this.data.id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.ngOnInit();
      },
      error:(err:any)=>{
        console.log(err);
      }
    })

    
    // this.dataService.postReview(this.review).subscribe({
    //   next: (data:any) => {
    //     console.log(data);
    //     this.data.reviews.push(this.review);
    //   },
    //   error: (error:any) => {
    //     console.error('Error:', error);
    //   }
    // });
    // this.review='';
  }

}
