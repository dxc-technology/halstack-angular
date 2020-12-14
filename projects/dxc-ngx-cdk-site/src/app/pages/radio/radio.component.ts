import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { RadioExampleComponent } from '../../components/examples/radio/radio-example/radio-example.component';
import { RadioApiComponent } from '../../components/examples/radio/radio-api/radio-api.component';
import { RadioThemeComponent } from '../../components/examples/radio/radio-theme/radio-theme.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
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
      {id: 0, label: 'API',selector: 'radio-api', component: RadioApiComponent},
      {id: 1,label: 'THEMING', selector: 'radio-theme', component: RadioThemeComponent},
      {id: 2,label: 'EXAMPLES', selector: 'examples-component-radios', component: RadioExampleComponent}
      );
  }

}
