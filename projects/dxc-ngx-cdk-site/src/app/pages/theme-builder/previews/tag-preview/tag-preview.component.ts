import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-preview',
  templateUrl: './tag-preview.component.html'
})
export class TagPreviewComponent implements OnInit {

  dxcLogoPath = "./assets/img/dxclogo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
