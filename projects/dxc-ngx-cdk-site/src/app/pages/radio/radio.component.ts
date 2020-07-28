import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { RadioPropertiesComponent } from 'src/app/components/examples/radio/properties/radio-properties/radio-properties.component';
import { RadioExampleComponent } from '../../components/examples/radio/radio-example/radio-example.component';
import { RadioImportComponent } from '../../components/examples/radio/radio-import/radio-import.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'PROPERTIES',selector: 'examples-properties-radios', component: RadioPropertiesComponent},
      {id: 1,label: 'MODULE', selector: 'radio-import', component: RadioImportComponent},
      {id: 2,label: 'EXAMPLES', selector: 'examples-component-radios', component: RadioExampleComponent}
      );
  }

}
