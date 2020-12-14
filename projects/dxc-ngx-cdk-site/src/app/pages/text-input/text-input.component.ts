import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { TextInputExampleComponent } from 'src/app/components/examples/text-input/text-input-example/text-input-example.component';
import { TextInputApiComponent } from '../../components/examples/text-input/text-input-api/text-input-api.component';
import { TextInputThemeComponent } from '../../components/examples/text-input/text-input-theme/text-input-theme.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
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
      {id:0, label: 'API',selector: 'text-input-api', component: TextInputApiComponent},
      {id:1, label: 'THEMING', selector: 'text-input-theme', component: TextInputThemeComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-input', component: TextInputExampleComponent}
    );
  }

}
