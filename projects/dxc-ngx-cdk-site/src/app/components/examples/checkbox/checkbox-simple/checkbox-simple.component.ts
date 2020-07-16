import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-simple',
  templateUrl: './checkbox-simple.component.html',
  styleUrls: ['./checkbox-simple.component.scss']
})
export class CheckboxSimpleComponent implements OnInit {
  
  checked:boolean;
  
  ngOnInit(): void {
    this.checked = false;
  }

  onChange(value) {
    this.checked = value;
    console.log("this.checked:", this.checked);
  }

}
