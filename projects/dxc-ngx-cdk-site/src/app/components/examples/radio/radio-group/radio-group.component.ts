import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
 
  checked1: boolean;
  checked2: boolean;
  checked3: boolean;

  constructor() { 
  }

  ngOnInit() {
    
  }
  onChange1(event){
    this.changeChecked(event, !event, !event);
  }
  onChange2(event){
    this.changeChecked(!event, event, !event);  
  }
  onChange3(event){
    this.changeChecked(!event, !event, event);   
  }

  private changeChecked(checked1, checked2, checked3){
    this.checked1 = checked1;
    this.checked2 = checked2;
    this.checked3 = checked3;
  }
}
