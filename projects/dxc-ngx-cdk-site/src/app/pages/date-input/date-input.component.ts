import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { DateInputExampleComponent } from 'src/app/components/examples/date-input/date-example/date-example.component';
import { DateInputApiComponent } from '../../components/examples/date-input/date-api/date-api.component';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html'
})
export class DateInputComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/experimental.svg';
  }

  ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'new-date-api', component: DateInputApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'date-properties', component: DateInputExampleComponent}
    );
  }

}
