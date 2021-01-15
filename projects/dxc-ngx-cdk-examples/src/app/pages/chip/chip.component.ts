import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chip-info',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  iconPath = './assets/images/home.svg';

  constructor() { }

  ngOnInit() {
  }

}
