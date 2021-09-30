import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dxc-input-text-suffix',
  templateUrl: './dxc-input-text-suffix.component.html'
})
export class DxcInputTextSuffixComponent implements OnInit {

  @Input()
  value = "";

  constructor() { }

  ngOnInit(): void {
  }

}
