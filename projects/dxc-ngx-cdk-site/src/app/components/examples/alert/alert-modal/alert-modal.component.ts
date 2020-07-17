import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  constructor() { }

  visible = false;

  ngOnInit() {
  }
  
  handleVisible() {
    this.visible = !this.visible;
  }
}
