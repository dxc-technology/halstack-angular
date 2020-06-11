import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr',
  template: `<ng-container cdkCellOutlet></ng-container>`,
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
}
  
  )
export class DxcRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
