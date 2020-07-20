import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-controlled',
  templateUrl: './accordion-controlled.component.html',
  styleUrls: ['./accordion-controlled.component.scss']
})
export class AccordionControlledComponent implements OnInit {

  isExpanded:boolean;

  constructor() {
    this.isExpanded = true;
   }

  ngOnInit() {
  }

  accordionClicked(event){
    this.isExpanded = event;
    console.log(event)
  }

}
