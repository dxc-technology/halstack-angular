import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { DateExampleComponent } from '../../components/examples/date/date-example/date-example.component';
import { DateApiComponent } from '../../components/examples/date/date-api/date-api.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  headingMargin = {
    bottom: 'medium'
  }

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'API',selector: 'date-api', component: DateApiComponent},
      {id: 1, label: 'EXAMPLES',selector: 'examples-component-dates', component: DateExampleComponent}

      );

  }
}
