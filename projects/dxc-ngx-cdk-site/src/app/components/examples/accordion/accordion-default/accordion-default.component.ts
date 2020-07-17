import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-default',
  templateUrl: './accordion-default.component.html',
  styleUrls: ['./accordion-default.component.scss']
})
export class AccordionDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accordionClicked() {
    console.log("Default Accordion Clicked");
  }
}
