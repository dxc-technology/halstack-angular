import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dxc-input-text-prefix',
  templateUrl: './dxc-input-text-prefix.component.html'
})
export class DxcInputTextPrefixComponent implements OnInit {

  @Input()
  value = "";

  constructor() { }

  ngOnInit(): void {
  }

}
