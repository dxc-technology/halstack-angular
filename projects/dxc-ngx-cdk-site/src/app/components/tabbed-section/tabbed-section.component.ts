import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-tabbed-section',
  templateUrl: './tabbed-section.component.html',
  styleUrls: ['./tabbed-section.component.scss']
})
export class TabbedSectionComponent implements OnInit {

  @Input()
  sections;

  constructor() {     
  }

  ngOnInit() {

  }

}
