import { Component, Host, Inject, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  isExpanded = false;
  homeLogo = './assets/images/home.svg';
  facebookLogo = './assets/images/facebook.svg';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

  changeIsExpanded($event){
    this.isExpanded = $event;
    console.log($event);
  }

  uncontrolledIsExpanded($event){
    console.log('uncontrolled: ' + $event);
  }

}
