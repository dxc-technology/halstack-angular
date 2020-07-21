import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-sized',
  templateUrl: './radio-sized.component.html',
  styleUrls: ['./radio-sized.component.scss']
})
export class RadioSizedComponent implements OnInit  {

  checked1:boolean;
  checked2:boolean;
  
  constructor() {}

  ngOnInit(): void {
    this.checked1 = false;
    this.checked2 = true;
  }

  onChange(){
    this.checked1 = !this.checked1;
    this.checked2 = !this.checked2;
    // console.debug(this.checked);
  }

}
