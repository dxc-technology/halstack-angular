import { Component } from '@angular/core';

@Component({
  selector: 'button-info',
  templateUrl: './button-info.component.html',
  styleUrls: ['./button-info.component.scss']
})
export class ButtonInfoComponent {

  constructor()  {}

  checked = true;
  public showAlert(event) {
    console.log(event);
    window.alert('Button1');
  }

  public changeCheckBoxValue() {
    this.checked = !this.checked;
  }


}
