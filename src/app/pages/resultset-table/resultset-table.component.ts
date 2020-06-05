import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resultset-table-info',
  templateUrl: './resultset-table.component.html',
  styleUrls: ['./resultset-table.component.scss']
})
export class ResultsetTableComponent implements OnInit {

  data:any;

  constructor() {
    this.data = {
      items: [
        {
          user:"user1",
          email:"user1@gmail.com"
        },
        {
          user:"user2",
          email:"user2@gmail.com"
        }
      ], 
      totalItems: 2
    };
   }

  ngOnInit() {
  }

}
