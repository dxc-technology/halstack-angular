import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss']
})
export class CardActionComponent implements OnInit {

  constructor() { }

  click() {
    console.log("click");
  }

  ngOnInit() {
  }

}
