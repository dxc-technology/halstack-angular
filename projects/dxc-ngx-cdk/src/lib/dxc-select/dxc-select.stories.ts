import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import selectMD from "./README.md";
import { DxcSliderModule } from './dxc-select.module';
import { boolean, select, array, text } from "@storybook/addon-knobs";
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DxcSelectComponent } from './dxc-slelect.component';


storiesOf("Form Components|Select", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcSelectComponent,BrowserModule, BrowserAnimationsModule],
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


    </div>
      `,
      props: {
        valueChange: action('Change fired!'),
        dragEnd: action('Drag end change fired!')
      }
    }),
    {
    notes: {markdown: selectMD }
    }
  );
  const defaultValue = ['Red', "Blue"];
    storiesOf("Form Components|Select", module)
    .addDecorator(
      moduleMetadata({
        imports: [DxcSliderModule,BrowserModule, BrowserAnimationsModule],
      })
    )
    .add(
      "Knobs example",
      () => ({
        template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >

                   

                     </div>
                        `,
        props: {
          iconPosition : select("Icon position", { before: "before", after: "after" }, "before"),
          label: text("text", "Checkbox example"),
          nultple: boolean("nultple", false),
          options: array("Options", defaultValue);
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
