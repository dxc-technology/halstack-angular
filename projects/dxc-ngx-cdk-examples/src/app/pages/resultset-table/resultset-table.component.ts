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

  itemsPerPage = "5";
  
  constructor() {

    this.data = [
        {
          user:"user1",
          email:"user1@gmail.com"
        },
        {
          user:"pepe",
          email:"user2@gmail.com"
        },
        {
          user:"user555",
          email:"user2@gmail.com"
        },{
          user:"aida",
          email:"user2@gmail.com"
        },{
          user:"user75",
          email:"user2@gmail.com"
        },{
          user:"espe",
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
          user:"user177",
          email:"user2@gmail.com"
        },{
          user:"user125",
          email:"user2@gmail.com"
        },{
          user:"user13456",
          email:"user2@gmail.com"
        },{
          user:"user14",
          email:"user2@gmail.com"
        },{
          user:"user16",
          email:"user2@gmail.com"
        },{
          user:"user30",
          email:"user2@gmail.com"
        },{
          user:"user167",
          email:"user2@gmail.com"
        }
      ]
    };

    options = [{label:"2", value:2}, {label:"10", value:10} ];
    itemsPerPageEvent($event) {
      console.log($event);
      this.itemsPerPage = $event;
    }

    ngOnInit(){

    }

}