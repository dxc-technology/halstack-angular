import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-dark',
  templateUrl: './accordion-dark.component.html',
  styleUrls: ['./accordion-dark.component.scss']
})
export class AccordionDarkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accordionClicked() {
    console.log("Dark theme Accordion Clicked");
  }
}
