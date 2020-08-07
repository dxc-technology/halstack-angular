import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { CheckboxExampleComponent } from '../../components/examples/checkbox/checkbox-example/checkbox-example.component';
import { CheckboxApiComponent } from 'src/app/components/examples/checkbox/checkbox-api/checkbox-api.component';
import { CheckboxThemeComponent } from 'src/app/components/examples/checkbox/checkbox-theme/checkbox-theme.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

   ngOnInit() {
    

    this.sections.push( 
      {id: 0, label: 'API',selector: 'checkbox-api', component: CheckboxApiComponent},
      {id: 1, label: 'THEMING',selector: 'checkbox-theme', component: CheckboxThemeComponent},
      {id: 2,label: 'EXAMPLES', selector: 'examples-component-checkboxes', component: CheckboxExampleComponent}
      );
  }
  
}
