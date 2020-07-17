import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-tabs',
  templateUrl: './tabs-default.component.html',
  styleUrls: ['./tabs-default.component.scss']
})
export class TabsDefaultComponent implements OnInit {

  constructor() { }

  activeTabIndex:number;

  tabClicked(event){
    this.activeTabIndex = event;
    console.log("this.activeTabIndex :",this.activeTabIndex );
  }

  ngOnInit() {
  }

}
