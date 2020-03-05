import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  isVisible = false;

  handleVisibility() {
    this.isVisible = !this.isVisible;
  }

  constructor() { }

  ngOnInit() {
  }

}
