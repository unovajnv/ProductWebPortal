import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/datashare/shared.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private sharedService : SharedService) { }
  searchQuery: string=''

  ngOnInit(): void {
    
  }
  onSearch(event: any) {
    this.sharedService.changeData(event.target.value);
    //console.log(this.sharedService.currentData);
  }
 
}
