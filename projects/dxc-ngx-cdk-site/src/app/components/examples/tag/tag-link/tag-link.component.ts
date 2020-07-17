import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-link',
  templateUrl: './tag-link.component.html',
  styleUrls: ['./tag-link.component.scss']
})
export class TagLinkComponent implements OnInit {

  dxcLogoPath:string;

  constructor() { }

  ngOnInit() {
    this.dxcLogoPath = './assets/img/dxclogo.png';
  }

}
