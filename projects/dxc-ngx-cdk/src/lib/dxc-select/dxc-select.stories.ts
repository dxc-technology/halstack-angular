import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import selectMD from "./README.md";
import { DXCSelectModule } from './dxc-select.module';
import { boolean, select, array, text } from "@storybook/addon-knobs";
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
const defaultValue = [{label:'Macaw',value: 'macaw',iconSrc:'./macaw.svg'},{label:'Toucan',value: 'toucan', iconSrc:'/toucan.svg'}];
let noIcons = [{label:'Macaw',value: 'macaw'},{label:'Toucan',value: 'toucan'}];
const iconsText = [{label:'Macaw',value: 'macaw',iconSrc:'./macaw.svg'},{label:'Toucan',value: 'toucan', iconSrc:'/toucan.svg'}];
const icons = [{value: 'macaw',iconSrc:'./macaw.svg'},{value:'toucan',iconSrc:'/toucan.svg'}];


storiesOf("Form Components|Select", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCSelectModule,BrowserModule, BrowserAnimationsModule],
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

            <dxc-select 
            [label] = "'Simple select'"
            [options] = "options"
            ></dxc-select>

            <dxc-select 
            [label] = "'disabled select'"
            [options] = "options"
            [disabled] = true
            ></dxc-select>

            <dxc-select 
            [multiple]= true
            [label] = "'Multiple Select'"
            [options] = "options"
            ></dxc-select>

            <dxc-select 
            [multiple] = true
            [label] = "'Multiple Select with text   & icons'"
            [options] = "optionsTextIcons"
            ></dxc-select>
            
            <dxc-select 
            [multiple] = true
            [label] = "'Multiple Select with text   & icons'"
            [options] = "optionsTextIcons"
            ></dxc-select>

            <dxc-select 
            [label] = "'Multiple Select with only  icons'"
            [multiple] = true
            [options] = "optionsOnlyIcons"
            ></dxc-select>
   
        </div>
  
     

        
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

      <dxc-select 
      [label] = "'Simple select'"
      [options] = "options"
      [theme] ="'dark'"
      ></dxc-select>

      <dxc-select 
      [label] = "'disabled select'"
      [options] = "options"
      [disabled] = true
      [theme] ="'dark'"
      ></dxc-select>

      <dxc-select 
      [multiple]= true
      [label] = "'Multiple Select'"
      [theme] ="'dark'"
      [options] = "options"
      ></dxc-select>

      <dxc-select 
      [multiple] = true
      [label] = "'Multiple Select with text   & icons'"
      [options] = "optionsTextIcons"
      [theme] ="'dark'"
      ></dxc-select>
      
      <dxc-select 
      [multiple] = true
      [label] = "'Multiple Select with text   & icons'"
      [options] = "optionsTextIcons"
      [theme] ="'dark'"
      ></dxc-select>

      <dxc-select 
      [label] = "'Multiple Select with only  icons'"
      [multiple] = true
      [theme] ="'dark'"
      [options] = "optionsOnlyIcons"
      ></dxc-select>

    </div>
      `,

      props: {
        options: array("Options", noIcons),
        optionsOnlyIcons: array("OptionsOnlyIcons", icons),
        optionsTextIcons: array("OptionsTextAndIcon", iconsText),

        valueChange: action('Change fired!')
      }
    }),
    {
    notes: {markdown: selectMD }
    }
  );
 
  storiesOf("Form Components|Select", module)
    .addDecorator(
      moduleMetadata({
        imports: [DXCSelectModule,BrowserModule, BrowserAnimationsModule],
      })
    )
    .add(
      "Knobs example",
      () => ({
        template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
                        <dxc-select [options] = "options"
                                    [multiple] = "nultple"
                                    [disabled] = "disabled"
                                    [required] = "required"
                                    [theme] = "theme"
                                    [label] = "label"
                                    (valueChange) = "valueChange($event)"
                                    [iconPosition] = "iconPosition"
                        ></dxc-select>
                        <br>
                        <dxc-select [options] = "options"
                        [multiple] = "true"
                        [disabled] = "disabled"
                        [required] = "required"
                        [theme] = "theme"
                        [label] = "label"
                        (valueChange) = "valueChange($event)"
                        [iconPosition] = "iconPosition"
            ></dxc-select>
  
                     </div>
                        `,
        props: {
          iconPosition : select("Icon position", { before: "before", after: "after" }, "before"),
          label: text("text", "Select example"),
          options: array("Options", defaultValue),
          valueChange: action("option selected!"),
          required: boolean("required", false),
          disabled: boolean("disabled", false),
          theme: select("theme", { light: "light", dark: "dark" }, "light"),
        }
      }),
      {
        notes: { markdown: selectMD }
      }
    );
