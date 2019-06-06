import { Component } from '@angular/core';
import { Components } from './components'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  components: Array<any>;
  constructor() {
     this.components = Components;
  }


  title = 'dxc-angular-cdk';

  checked = true;

  birthday = new Date(1992, 11, 5);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  // Prevent Saturday and Sunday from being selected.
  filter(d: Date): boolean {
    return d.getDay() !== 0 && d.getDay() !== 6;
  }

  showAlert(event) {
    console.log(event);
    window.alert('Button1');
  }

  changeCheckBoxValue() {
    this.checked = !this.checked;
  }

  isRequired() {
    return true;
  }
}


