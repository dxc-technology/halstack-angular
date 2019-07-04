import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import selectMD from "./README.md";
import { DXCSelectModule } from './dxc-select.module';
import { boolean, select, array, text } from "@storybook/addon-knobs";
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


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
  const defaultValue = [{label:'Red',value: 'red'},{label:'Blue',value: 'blue'}];
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
