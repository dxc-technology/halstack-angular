import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-sized',
  templateUrl: './button-sized.component.html',
  styleUrls: ['./button-sized.component.scss']
})
export class ButtonSizedComponent {

  constructor() { 
    
  }

  onClick(){
    console.log('ButtonSizedComponent onlick ');
  }

}
