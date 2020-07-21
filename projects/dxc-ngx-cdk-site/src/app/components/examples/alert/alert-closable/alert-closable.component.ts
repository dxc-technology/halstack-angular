import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-closable',
  templateUrl: './alert-closable.component.html',
  styleUrls: ['./alert-closable.component.scss']
})
export class AlertClosableComponent implements OnInit {

  isVisible:boolean;

  constructor() { }

  ngOnInit() {
    this.isVisible = false;
  }

  handleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
