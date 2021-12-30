import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dxc-text-input-prefix',
  templateUrl: './dxc-text-input-prefix.component.html'
})
export class DxcTextInputPrefixComponent implements OnInit {

  @Input()
  value = "";

  constructor() { }

  ngOnInit(): void {
  }

}
