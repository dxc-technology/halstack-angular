import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { ChipExampleComponent } from 'src/app/components/examples/chip/chip-example/chip-example.component';
import { ChipTablePropertiesComponent } from 'src/app/components/examples/chip/properties/box-table-properties/chip-table-properties.component';
import { ChipImportComponent } from 'src/app/components/examples/chip/chip-import/chip-import.component';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() {
    

    this.sections.push( 
      {id: 0, label: 'PROPERTIES',selector: 'examples-properties-checkboxes', component: ChipTablePropertiesComponent},
      {id: 1, label: 'MODULE',selector: 'checkbox-import', component: ChipImportComponent},
      {id: 2,label: 'EXAMPLES', selector: 'examples-component-checkboxes', component: ChipExampleComponent}
      );
  }
  
}
