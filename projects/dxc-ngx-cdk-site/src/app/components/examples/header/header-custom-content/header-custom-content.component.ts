import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-custom-content',
  templateUrl: './header-custom-content.component.html',
  styleUrls: ['./header-custom-content.component.scss']
})
export class HeaderCustomContentComponent implements OnInit {

  paddindProp= {right:"medium"};
  
  constructor() { }

  ngOnInit() {
  }

}
