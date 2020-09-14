import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-icon',
  templateUrl: './chip-icon.component.html',
  styleUrls: ['./chip-icon.component.scss']
})
export class ChipIconComponent implements OnInit {

  iconPath = 'https://img.icons8.com/android/24/000000/twitter.png';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("Click");
  }

}
