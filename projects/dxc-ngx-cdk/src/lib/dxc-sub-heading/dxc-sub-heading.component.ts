import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dxc-sub-heading',
  templateUrl: './dxc-sub-heading.component.html',
  styleUrls: ['./dxc-sub-heading.component.scss']
})
export class DxcSubHeadingComponent implements OnInit {

  @Input() heading: string;
  @Input() relation: string;
  @Input() relationicon: string;
  @Input() subheading: string;
  @Input() assistiveText: string;
  @Input() assistiveTextPosition = 'right';
  constructor() { }

  ngOnInit() {
  }

}
