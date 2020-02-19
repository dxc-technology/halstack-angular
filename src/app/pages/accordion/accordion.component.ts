import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {


  isExpanded = true;
  homeLogo = './assets/images/home.svg';
  facebookLogo = './assets/images/facebook.svg';
  
  constructor() { }

  ngOnInit() {
  }


  changeIsExpanded(){
    this.isExpanded = !this.isExpanded;
  }

}
