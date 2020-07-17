import { Component } from '@angular/core';

@Component({
  selector: 'dialog-close',
  templateUrl: './dialog-close.component.html',
  styleUrls: ['./dialog-close.component.scss']
})
export class DialogCloseComponent {

  visible1 = false;
  visible2 = false;
  visible3 = false;

  padding={top:"xxlarge", right: "xxlarge", bottom: "xxlarge", left: "xxlarge"}

  constructor()  {}

  openDialog1() {
    this.visible1 = !this.visible1;
  }
  openDialog2() {
    this.visible2 = !this.visible2;
  }
  openDialog3() {
    this.visible3 = !this.visible3;
  }
}
