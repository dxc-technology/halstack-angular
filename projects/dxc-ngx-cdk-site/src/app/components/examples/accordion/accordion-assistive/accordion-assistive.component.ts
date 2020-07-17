import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-assistive',
  templateUrl: './accordion-assistive.component.html',
  styleUrls: ['./accordion-assistive.component.scss']
})
export class AccordionAssistiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accordionClicked() {
    console.log("Accordion with assistive text Clicked");
  }
}
