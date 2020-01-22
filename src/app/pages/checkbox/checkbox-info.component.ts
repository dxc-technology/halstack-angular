import { Component } from '@angular/core';

@Component({
  selector: 'checkbox-info',
  templateUrl: './checkbox-info.component.html',
  styleUrls: ['./checkbox-info.component.scss']
})
export class CheckboxInfoComponent {

  constructor()  {}
  checked = false;
  onChange() {
    console.log(this.checked);
  }

}
