import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-disabled',
  templateUrl: './link-disabled.component.html',
  styleUrls: ['./link-disabled.component.scss']
})
export class LinkDisabledComponent implements OnInit {

  disabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
