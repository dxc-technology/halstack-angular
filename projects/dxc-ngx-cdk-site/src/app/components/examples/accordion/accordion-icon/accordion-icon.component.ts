import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-icon',
  templateUrl: './accordion-icon.component.html',
  styleUrls: ['./accordion-icon.component.scss']
})
export class AccordionIconComponent implements OnInit {

  homeLogo = './assets/img/home.svg';

  constructor() { }

  ngOnInit() {
  }

  accordionClicked() {
    console.log("Accordion with icon clicked");
  }
}
