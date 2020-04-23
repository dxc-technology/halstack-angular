import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'link-info',
  templateUrl: './link-info.component.html',
  styleUrls: ['./link-info.component.scss']
})
export class LinkInfoComponent implements OnInit {

  inheritColor: boolean = true;
  newWindow: boolean = true;
  underlined: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
