import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { DatePropertiesComponent } from '../../components/examples/date/properties/date-properties/date-properties.component';
import { DateExampleComponent } from '../../components/examples/date/date-example/date-example.component';
import { DateImportComponent } from '../../components/examples/date/date-import/date-import.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'PROPERTIES',selector: 'examples-properties-dates', component: DatePropertiesComponent},
      {id: 1, label: 'MODULE',selector: 'date-import', component: DateImportComponent},
      {id: 2, label: 'EXAMPLES',selector: 'examples-component-dates', component: DateExampleComponent}

      );

  }
}
