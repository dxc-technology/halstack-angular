import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import sliderMD from "./README.md";
import { DxcSliderModule } from './dxc-slider.module';
import { boolean, select, number } from "@storybook/addon-knobs";
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


const sliderValue = 10;
storiesOf("Form Components|Slider", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcSliderModule,BrowserModule, BrowserAnimationsModule],
    })
  )
  .add(
    'Types',
    () => ({
      template: `
      <h3 style="display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;"
      >Light</h3>
      <div  style="
      width: calc(100% - 380px); 
      margin-right: 200px;
      padding: 20px;
      margin-left: 45px;">

        <h4>Basic slider</h4>
        <dxc-slider [name]="slider1"></dxc-slider>
 
    
        <h4>Slider with custom min, max, step and limitValue</h4>
        <dxc-slider
          [min]="15"
          [max]="60"
          [step]="15"
          [name]="slider2"
          [showLimitValues]="true"
        ></dxc-slider>
     
      
      <h4>Slider with Input and variable binding: Value {{sliderValue}}</h4>
      <dxc-slider [showInput]="true" [(value)]="sliderValue"  [step]="15"  [showLimitValues]="true"></dxc-slider>
    
        <h4>Slider OnDragEnnd </h4>
        <dxc-slider  (dragEnd) = "onDragEnd($event)"></dxc-slider>
     
        <h4>Slider  </h4>
        <dxc-slider  (valueChange) = "sliderValueChange($event)"></dxc-slider>
       
        <h4>Slider disabled</h4>
        <dxc-slider [disabled]="true"></dxc-slider>
    

        
    <h3 style="display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;"
    >Dark</h3>

    <div style="background: black;
     width: calc(100% - 380px); 
      margin-right: 200px;
      padding: 20px;
      margin-left: 45px;" >            
        <h4 style="color:white">Basic slider</h4>
        <dxc-slider [name]="slider1"  [theme] ="'dark'"></dxc-slider>
      
        <h4  style="color:white">Slider with custom min, max, step and limitValue</h4>
        <dxc-slider
          [min]="0"
          [max]="60"
          [step]="15"
          [name]="slider2"
          [showLimitValues]="true"
          [theme] ="'dark'"
        ></dxc-slider>
        
        <h4>Slider with Input and variable binding: Value {{sliderValue}}</h4>
        <dxc-slider [showInput]="true" [(value)]="sliderValue"  [theme] ="'dark'"   [step]="15"  [showLimitValues]="true"></dxc-slider>
     
        <h4 style="color:white">Slider OnDragEnnd </h4>
        <dxc-slider  (dragEnd) = "dragEnd($event)"   [theme] ="'dark'"></dxc-slider>
       
        <h4 style="color:white">Slider onChange </h4>
        <dxc-slider  (valueChange) = "valueChange($event)"  [theme] ="'dark'"></dxc-slider>
      
        <h4 style="color:white" >Slider disabled</h4>
        <dxc-slider [disabled]="true"   [theme] ="'dark'"></dxc-slider>
    </div>
      `,
      props: {
        valueChange: action('Change fired!'),
        dragEnd: action('Drag end change fired!')
      }
    }),
    {
    notes: {markdown: sliderMD }
    }
  );
    
    storiesOf("Form Components|Slider", module)
    .addDecorator(
      moduleMetadata({
        imports: [DxcSliderModule,BrowserModule, BrowserAnimationsModule],
      })
    )
    .add(
      "Knobs example",
      () => ({
        template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >

                        <dxc-slider
                        [min] ="min"
                        [max]="max"
                        [step] ="step"
                        [disabled] ="disabled"
                        [theme] ="theme"
                        [showLimitValues] ="showLimitValues"
                        [showInput] ="showInput"
                        [required] ="required"
                        (valueChange) ="valueChange($event)"
                        (dragEnd) ="dragEnd($event)"
                        (inputBlur) ="inputBlur($event)"
                        ></dxc-slider>
                     </div>
                        `,
        props: {
          min: number("min",0 ),
          max: number("max",100 ),
          step: number("step",15),
          valueChange: action("checked fired!"),
          dragEnd: action("drag ended!"),
          inputBlur: action("inut blur!"),
          showLimitValues: boolean('showLimitValues', true),
          showInput: boolean('showInput', true),
          required: boolean("required", false),
          disabled: boolean("disabled", false),
          theme: select("theme", { light: "light", dark: "dark" }, "light"),
        }
      }),
      {
        notes: { markdown: sliderMD }
      }
    );
