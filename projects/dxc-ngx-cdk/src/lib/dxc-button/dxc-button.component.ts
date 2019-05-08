import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dxc-button',
  templateUrl: './dxc-button.component.html',
  styleUrls: ['./dxc-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DxcButtonComponent implements OnInit {
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() disableRipple: boolean;
  @Input() text: string;
  @Input() iconType: string;
  @Input() icon: string;
  @Input() iconPosition: string;
  constructor() {}

  ngOnInit() {}
}
