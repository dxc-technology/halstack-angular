import { Component } from '@angular/core';

@Component({
  selector: 'button-info',
  templateUrl: './button-info.component.html',
  styleUrls: ['./button-info.component.scss']
})
export class ButtonInfoComponent {

  constructor()  {}

  margins = {
    top: "medium",
    right: "small",
    bottom: "medium"
  }

  mode="basic";

  checked = true;
  public showAlert(event) {
    console.log(event);
    window.alert('Button1');
  }

  public updateMode(event) {
    this.mode = event.target.value;
    console.log(this.mode);
  }

  public changeCheckBoxValue() {
    this.checked = !this.checked;
  }


}
