import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-uncontrolled',
  templateUrl: './tabs-uncontrolled.component.html',
  styleUrls: ['./tabs-uncontrolled.component.scss']
})
export class TabsUncontrolledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabClicked(event){
    console.log(event);
  }

}
