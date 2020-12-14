import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { SliderExampleComponent } from '../../components/examples/slider/slider-example/slider-example.component';
import { SliderApiComponent } from '../../components/examples/slider/slider-api/slider-api.component';
import { SliderThemeComponent } from '../../components/examples/slider/slider-theme/slider-theme.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
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
      {id: 0, label: 'API',selector: 'examples-properties-slider', component: SliderApiComponent},
      {id: 1, label: 'THEMING', selector: 'slider-import', component: SliderThemeComponent},
      {id: 2, label: 'EXAMPLES', selector: 'examples-component-slider', component: SliderExampleComponent}
    );
  }

}
