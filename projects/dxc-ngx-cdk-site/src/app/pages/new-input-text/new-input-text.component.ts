import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { InputTextExampleComponent } from 'src/app/components/examples/input-text/input-text-example/input-text-example.component';
import { InputTextApiComponent } from '../../components/examples/input-text/input-text-api/input-text-api.component';

@Component({
  selector: 'new-input-text',
  templateUrl: './new-input-text.component.html'
})
export class NewInputTextComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/experimental.svg';
  }

  ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'text-input-api', component: InputTextApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-input', component: InputTextExampleComponent}
    );
  }

}