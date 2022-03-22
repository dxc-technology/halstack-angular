import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { RadioGroupApiComponent } from '../../components/examples/radio-group/radio-group-api/radio-group-api.component';
// import { RadioExampleComponent } from '../../components/examples/radio-group/radio-group-example/radio-group-example.component';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'API',selector: 'radio-group-api', component: RadioGroupApiComponent},
      // {id: 1,label: 'EXAMPLES', selector: 'examples-component-radio-group', component: RadioGroupExampleComponent}
      );
  }

}
