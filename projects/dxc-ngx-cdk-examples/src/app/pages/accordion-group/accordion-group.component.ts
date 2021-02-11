import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accordion-group',
  templateUrl: './accordion-group.component.html'
})
export class AccordionGroupComponent implements OnInit {

  homeLogo = './assets/images/home.svg';
  facebookLogo = './assets/images/facebook.svg';

  isExpanded: any = 1;
  
  constructor() { }

  ngOnInit() {
  }

  changeIsExpanded($event){
    console.log("changeIsExpanded:",$event);
  }

  uncontrolledIsExpanded($event){
    console.log('uncontrolled: ' + $event);
  }

  onCloseControlled($value){
    console.log("onCloseControlled:",$value);
    this.isExpanded = this.isExpanded === $value ? null : $value;
  }

}
