import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html'
})
export class PasswordComponent implements OnInit {

  controlledValue = "c";

  constructor() { }

  ngOnInit(): void {
  }

  change(event) {
    this.controlledValue = event;
  }

}
