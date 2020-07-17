import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-alternative',
  templateUrl: './accordion-alternative.component.html',
  styleUrls: ['./accordion-alternative.component.scss']
})
export class AccordionAlternativeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accordionClicked() {
    console.log("Alternative Accordion Click");
  }
}
