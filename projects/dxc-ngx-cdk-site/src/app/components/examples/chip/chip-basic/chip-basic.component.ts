import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-basic',
  templateUrl: './chip-basic.component.html',
  styleUrls: ['./chip-basic.component.scss']
})
export class ChipBasicComponent implements OnInit {

  iconPath = 'https://img.icons8.com/android/24/000000/twitter.png';

  constructor() { }

  ngOnInit() {
  }

}
