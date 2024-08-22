import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  users: any[] = [];
  products: any[] = [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
      this.dataService.getProducts().subscribe((data:any) => {
       this.products = data;
       console.log(this.products);
     });
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
