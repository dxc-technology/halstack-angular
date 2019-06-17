import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { DxcSliderComponent } from './dxc-slider.component';
import { MatSliderModule } from '@angular/material';

storiesOf('Slider', module)
  .addDecorator(
    moduleMetadata({
      imports: [MatSliderModule],
      declarations: [DxcSliderComponent]
    })
  )
  .add(
    'Light',
    () => ({
      template: `
      <div class="sliders-sections">
        <div>
          <h4>Basic slider</h4>
          <dxc-slider [name]="slider1"></dxc-slider>
        </div>
        <div>
          <h4>Slider with custom min, max, step and limitValue</h4>
          <dxc-slider
            min="10"
            [max]="60"
            [step]="15"
            [name]="slider2"
            [showLimitValues]="true"
          ></dxc-slider>
        </div>
        <div>
          <h4>Slider with Input and variable binding: Value {{sliderValue}}</h4>
          <dxc-slider [showInput]="true" [(value)]="sliderValue"></dxc-slider>
        </div>
        <div>
          <h4>Slider OnDragEnnd </h4>
          <dxc-slider  (dragEnd) = "onDragEnd($event)"></dxc-slider>
        </div>
        <div>
            <h4>Slider onChange </h4>
            <dxc-slider  (valueChange) = "sliderValueChange($event)"></dxc-slider>
        </div>
        <div>
          <h4>Slider disabled</h4>
          <dxc-slider [disabled]="true"></dxc-slider>
        </div>
      </div>
      `,
      props: {
        valueChange: action('Change fired!'),
        dragEnd: action('Drag end change fired!')
      }
    }),
    { notes: 'Normal DXC Slider' }
  ).add(
    'Dark',
    () => ({
      template: `
      <div class="sliders-sections-dark">
      <div> 
          <h2>Dark theme</h2>
      </div>   
          <div>
        <div class="dark-slider-content">
          <h4>Basic slider</h4>
          <dxc-slider [name]="slider1"  [theme] ="'dark'"></dxc-slider>
        </div>
        <div>
          <h4>Slider with custom min, max, step and limitValue</h4>
          <dxc-slider
            [min]="0"
            [max]="60"
            [step]="15"
            [name]="slider2"
            [showLimitValues]="true"
            [theme] ="'dark'"
          ></dxc-slider>
        </div>
        <div>
          <h4>Slider with Input and variable binding: Value {{sliderValue}}</h4>
          <dxc-slider [showInput]="true" [(value)]="sliderValue"  [theme] ="'dark'"   [step]="15"  [showLimitValues]="true"></dxc-slider>
        </div>
        <div>
          <h4>Slider OnDragEnnd </h4>
          <dxc-slider  (dragEnd) = "onDragEnd($event)"   [theme] ="'dark'"></dxc-slider>
        </div>
        <div>
            <h4>Slider onChange </h4>
            <dxc-slider  (valueChange) = "sliderValueChange($event)"  [theme] ="'dark'"></dxc-slider>
        </div>
        <div>
          <h4>Slider disabled</h4>
          <dxc-slider [disabled]="true"   [theme] ="'dark'"></dxc-slider>
        </div>
      </div> 
      </div>
      `,
      props: {
        valueChange: action('Change fired!'),
        dragEnd: action('Drag end change fired!')
      }
    }),
    { notes: 'Dark DXC Slider' }
  )
