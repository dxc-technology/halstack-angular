import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbed-section',
  templateUrl: './tabbed-section.component.html',
  styleUrls: ['./tabbed-section.component.scss']
})
export class TabbedSectionComponent implements OnInit {

  sections: Array<any>;

  constructor(){
    this.sections = new Array<any>();
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'TAB 1', selector: 'tab1-selector'},
      {id:1, label: 'TAB 2', selector: 'tab2-selector'},
      {id:2, label: 'TAB 3', selector: 'tab3-selector'},
    );
  }

}
