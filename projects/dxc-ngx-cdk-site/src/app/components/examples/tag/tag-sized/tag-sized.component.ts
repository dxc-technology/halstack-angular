import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-sized',
  templateUrl: './tag-sized.component.html',
  styleUrls: ['./tag-sized.component.scss']
})
export class TagSizedComponent implements OnInit {

  dxcLogoPath:string;

  constructor() { }

  ngOnInit() {
    this.dxcLogoPath = './assets/img/dxclogo.png';
  }

  onClick() {
    console.log('click');
  }

}
