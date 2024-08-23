import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { SharedService } from 'src/app/service/datashare/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  users: any[] = [];
  products: any[] = [];
  constructor(private dataService:DataService, private sharedData: SharedService, private dialog: MatDialog) { }


  isExpanded = false;

  searchText: string = '';
  
  sortRating(){

  }
  sortDelivery()
  {
    
  }


  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
  ngOnInit(): void {
      this.dataService.getProducts().subscribe((data:any) => {
       this.products = data;
       //console.log(this.products);
     });

     this.sharedData.currentData.subscribe(data => {
      this.searchText = data;
      //console.log(this.searchText)
    });
  }

  openDialog(content: string): void {
    this.dialog.open(DialogComponent, {
      data: content 
    });
  }
  sortPrice(){
    this.products.sort((a, b) => a.price - b.price);
  }
  
}












// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   users: any[] = [];
//   products: any[] = [];

//   constructor(private dataService: DataService) { }

//   ngOnInit(): void {
//     this.dataService.getUsers().subscribe(data => {
//       this.users = data;
//     });

//     this.dataService.getProducts().subscribe(data => {
//       this.products = data;
//     });
//   }
// }
