import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-undercorated',
  templateUrl: './link-undercorated.component.html',
  styleUrls: ['./link-undercorated.component.scss']
})
export class LinkUndercoratedComponent implements OnInit {

  underlined: boolean = true;
  newWindow: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
