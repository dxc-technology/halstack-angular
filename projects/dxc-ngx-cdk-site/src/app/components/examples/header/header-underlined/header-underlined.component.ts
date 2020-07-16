import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-underlined',
  templateUrl: './header-underlined.component.html',
  styleUrls: ['./header-underlined.component.scss']
})
export class HeaderUnderlinedComponent implements OnInit {

  underlined:boolean;
  
  constructor() { }

  ngOnInit() {
    this.underlined = true;
  }

}
