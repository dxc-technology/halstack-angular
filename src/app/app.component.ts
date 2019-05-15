import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dxc-angular-cdk';

  checked = true;

  showAlert() {
    window.alert('Button1');
  }

  changeCheckBoxValue() {
    this.checked = !this.checked;
  }

  isRequired() {
    return true;
  }
}
