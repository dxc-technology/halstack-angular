import { Component } from '@angular/core';

@Component({
  selector: 'th',
  template: `{{columnName}}`
})
export class DxcHeaderRowComponent {

  columnName:string;
}
