import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/sections';
import { NewTextareaExampleComponent } from 'src/app/components/examples/new-textarea/new-textarea-example/new-textarea-example.component';
import { NewTextareaApiComponent } from '../../components/examples/new-textarea/new-textarea-api/new-textarea-api.component';

@Component({
  selector: 'new-textarea',
  templateUrl: './new-textarea.component.html'
})
export class NewTextareaComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/experimental.svg';
  }

  ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'API',selector: 'textarea-api', component: NewTextareaApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-input', component: NewTextareaExampleComponent}
    );
  }

}