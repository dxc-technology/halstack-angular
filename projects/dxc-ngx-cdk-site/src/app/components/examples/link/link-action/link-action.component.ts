import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'link-action',
  templateUrl: './link-action.component.html'
})
export class LinkActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Click on Link");
  }

}
