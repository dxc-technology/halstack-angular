import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-action',
  templateUrl: './tag-action.component.html',
  styleUrls: ['./tag-action.component.scss']
})
export class TagActionComponent implements OnInit {

  dxcLogoPath:string;

  constructor() { }

  ngOnInit() {
    this.dxcLogoPath = './assets/img/dxclogo.png';
  }

  onClick() {
    console.log('click');
  }
}
