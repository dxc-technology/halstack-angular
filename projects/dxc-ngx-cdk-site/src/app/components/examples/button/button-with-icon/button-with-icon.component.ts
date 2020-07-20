import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss']
})
export class ButtonWithIconComponent implements OnInit {

  twitterLogoPath:string;

  constructor() { }

  ngOnInit() {
    this.twitterLogoPath = 'https://img.icons8.com/android/24/000000/twitter.png';
  }

  onClick(){
    console.log('app-button-with-icon');
  }

}
