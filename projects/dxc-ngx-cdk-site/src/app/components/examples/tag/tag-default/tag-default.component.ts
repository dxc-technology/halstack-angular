import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-default',
  templateUrl: './tag-default.component.html',
  styleUrls: ['./tag-default.component.scss']
})
export class TagDefaultComponent implements OnInit {

  dxcLogoPath:string;

  constructor() { }

  ngOnInit() {
    this.dxcLogoPath = './assets/img/dxclogo.png';
  }

}
