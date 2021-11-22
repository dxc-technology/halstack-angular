import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-group-preview',
  templateUrl: './toggle-group-preview.component.html'
})
export class ToggleGroupPreviewComponent implements OnInit {


  controlledOptions: Array<any>  = [{label: 'Goku', value:"1"},{label: 'Broli', value:"2"},{label: 'Vegeta', value:"3"}];
  value: Array<string>;

  constructor() {


  }

  ngOnInit(): void {
    this.value = ['1','2',];
  }

}
