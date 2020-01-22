import { Component } from '@angular/core';

@Component({
  selector: 'dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent {

  visible = false;

  padding={top:"xxlarge", right: "xxlarge", bottom: "xxlarge", left: "xxlarge"}

  constructor()  {}

  openDialog() {
    this.visible = !this.visible;
  }
}
