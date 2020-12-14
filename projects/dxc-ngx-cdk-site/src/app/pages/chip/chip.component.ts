import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { ChipExampleComponent } from 'src/app/components/examples/chip/chip-example/chip-example.component';
import { ChipApiComponent } from '../../components/examples/chip/chip-api/chip-api.component';
import { ChipThemeComponent } from '../../components/examples/chip/chip-theme/chip-theme.component';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
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
      {id: 0, label: 'API',selector: 'chip-api', component: ChipApiComponent},
      {id: 1, label: 'THEMING',selector: 'chip-theme', component: ChipThemeComponent},
      {id: 2,label: 'EXAMPLES', selector: 'examples-component-chip', component: ChipExampleComponent}
      );
  }
  
}
