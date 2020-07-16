import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';

@Component({
  selector: 'app-tabbed-section-default',
  templateUrl: './tabbed-section-default.component.html',
  styleUrls: ['./tabbed-section-default.component.scss']
})
export class TabbedSectionDefaultComponent implements OnInit {

  sections: Array<any>;

  constructor(){
    this.sections = new Array<any>();
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'SECTION 1', selector: 'section1-selector'},
      {id:1, label: 'SECTION 2', selector: 'section2-selector'},
      {id:2, label: 'SECTION 3', selector: 'section3-selector'},
    );
  }

}
// .css-1szcvmm .mat-tab-group
// .css-1szcvmm .mat-tab-group