import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { SliderPropertiesComponent } from '../../components/examples/slider/properties/slider-properties/slider-properties.component';
import { SliderExampleComponent } from '../../components/examples/slider/slider-example/slider-example.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id: 0, label: 'PROPERTIES',selector: 'examples-properties-slider', component: SliderPropertiesComponent},
      {id: 1, label: 'EXAMPLES', selector: 'examples-component-slider', component: SliderExampleComponent}
    );
  }

}
