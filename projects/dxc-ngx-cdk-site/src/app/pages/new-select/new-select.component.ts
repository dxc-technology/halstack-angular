import { Component, OnInit } from '@angular/core';
import { NewSelectApiComponent } from 'src/app/components/examples/new-select/select-api/select-api.component';
import { NewSelectExampleComponent } from 'src/app/components/examples/new-select/select-example/select-example.component';
import { Section } from 'src/app/model/sections';

@Component({
  selector: 'app-new-select',
  templateUrl: './new-select.component.html'
})
export class NewSelectComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/experimental.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id:0, label: 'API',selector: 'select-api', component: NewSelectApiComponent},
      {id:1, label: 'EXAMPLES', selector: 'examples-component-select', component: NewSelectExampleComponent}
      );
  }

}
