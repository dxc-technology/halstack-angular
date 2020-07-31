import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-disabled',
  templateUrl: './chip-disabled.component.html',
  styleUrls: ['./chip-disabled.component.scss']
})
export class ChipDisabledComponent implements OnInit {

  iconPath = 'https://img.icons8.com/android/24/000000/twitter.png';

  constructor() { }

  ngOnInit() {
  }

}
