import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'resultset-table-info',
  templateUrl: './resultset-table.component.html',
  styleUrls: ['./resultset-table.component.scss']
})
export class ResultsetTableComponent implements OnInit {

  data: Array<any>;

  constructor() {

    this.data = [
        {
          user:"user1",
          email:"user1@gmail.com"
        },
        {
          user:"user2",
          email:"user2@gmail.com"
        },
        {
          user:"user3",
          email:"user2@gmail.com"
        },{
          user:"user4",
          email:"user2@gmail.com"
        },{
          user:"user5",
          email:"user2@gmail.com"
        },{
          user:"user6",
          email:"user2@gmail.com"
        },{
          user:"user7",
          email:"user2@gmail.com"
        },{
          user:"user8",
          email:"user2@gmail.com"
        },{
          user:"user9",
          email:"user2@gmail.com"
        },{
          user:"user10",
          email:"user2@gmail.com"
        },{
          user:"user11",
          email:"user2@gmail.com"
        },{
          user:"user12",
          email:"user2@gmail.com"
        },{
          user:"user13",
          email:"user2@gmail.com"
        },{
          user:"user14",
          email:"user2@gmail.com"
        },{
          user:"user15",
          email:"user2@gmail.com"
        },{
          user:"user16",
          email:"user2@gmail.com"
        },{
          user:"user17",
          email:"user2@gmail.com"
        }
      ]
    };

    ngOnInit(){

    }

}