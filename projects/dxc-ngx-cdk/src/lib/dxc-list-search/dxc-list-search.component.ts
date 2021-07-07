import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dxc-list-search',
  templateUrl: './dxc-list-search.component.html',
  styleUrls: ['./dxc-list-search.component.scss']
})
export class DxcListSearchComponent implements OnInit {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  @Output() onSearchChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange = (event) => {
    this.onSearchChange.emit(this.value);
    this.valueChange.emit(this.value);
  }

}
