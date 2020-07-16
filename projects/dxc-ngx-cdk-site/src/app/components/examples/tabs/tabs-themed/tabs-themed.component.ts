import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themed-tabs',
  templateUrl: './tabs-themed.component.html',
  styleUrls: ['./tabs-themed.component.scss']
})
export class TabsThemedComponent implements OnInit {

  constructor() { }

  tabClicked(event){
    console.debug(event);
  }

  ngOnInit() {
  }

}
