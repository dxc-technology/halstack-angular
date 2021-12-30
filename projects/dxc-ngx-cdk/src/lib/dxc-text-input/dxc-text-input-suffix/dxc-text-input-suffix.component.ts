import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dxc-text-input-suffix',
  templateUrl: './dxc-text-input-suffix.component.html'
})
export class DxcTextInputSuffixComponent implements OnInit {

  @Input()
  value = "";

  constructor() { }

  ngOnInit(): void {
  }

}
