import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbed-section-notes',
  templateUrl: './tabbed-section-notes.component.html',
  styleUrls: ['./tabbed-section-notes.component.scss']
})
export class TabbedSectionNotesComponent implements OnInit {

  cssCode : string = 
  ` .mat-tab-group {
      z-index: 10;
      position: initial;
      top: unset;
  }` 
  
  constructor() { }

  ngOnInit() {
  }

}
