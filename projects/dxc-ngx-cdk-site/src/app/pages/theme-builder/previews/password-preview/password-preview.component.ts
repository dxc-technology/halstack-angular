import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-preview',
  templateUrl: './password-preview.component.html'
})
export class PasswordPreviewComponent implements OnInit {

  controlledValue = "c";

  constructor() { }

  ngOnInit(): void {
  }

}
