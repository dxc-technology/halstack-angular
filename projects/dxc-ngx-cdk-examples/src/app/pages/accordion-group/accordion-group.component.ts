import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accordion-group',
  templateUrl: './accordion-group.component.html'
})
export class AccordionGroupComponent implements OnInit {

  homeLogo = './assets/images/home.svg';
  facebookLogo = './assets/images/facebook.svg';
  
  constructor() { }

  ngOnInit() {
  }

  changeIsExpanded($event){
    console.log($event);
  }

  uncontrolledIsExpanded($event){
    console.log('uncontrolled: ' + $event);
  }

  onCloseControlled($event){
    // setIndexClose((prevValue) => {return prevValue === i ? null : i});
  }

}
