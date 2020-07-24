import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { TextInputTablePropertiesComponent } from '../../components/examples/text-input/properties/text-input-table-properties/text-input-table-properties.component';
import { TextInputExampleComponent } from 'src/app/components/examples/text-input/text-input-example/text-input-example.component';
import { TextInputImportComponent } from '../../components/examples/text-input/text-input-import/text-input-import.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'examples-properties-input', component: TextInputTablePropertiesComponent},
      {id:1, label: 'MODULE', selector: 'text-input-import', component: TextInputImportComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-input', component: TextInputExampleComponent}
    );
  }

}
