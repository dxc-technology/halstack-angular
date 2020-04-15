import { Component } from '@angular/core';

@Component({
  selector: 'radio-info',
  templateUrl: './radio-info.component.html',
  styleUrls: ['./radio-info.component.scss']
})
export class RadioInfoComponent {

  checked = true;
  constructor() {}

  changeChecked(value){
    this.checked = false;
    console.debug(this.checked);
  }

  onChange(){
    console.log('changing uncontrolled radio');
  }

}
