import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import inputMD from "./README.md";
import { boolean, select, array, text } from "@storybook/addon-knobs";
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DXCInputTextModule } from './dxc-input-text.module';


storiesOf("Form Components|Input Text", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCInputTextModule,BrowserModule, BrowserAnimationsModule],
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


    </div>
      `,

      props: {
        suffix: text("Suffix"),
        prefix: text("Prefix"),
        suffixIconSrc:text("/telephone-handle-silhouette.svg"),
        prefixIconSrc:text("/money.svg"),
        
        invalid: boolean('Invalid',false),
        assisteText: text("I am an assistive text"),
        valueChange: action("option selected!"),
        required: boolean("required", false),
        disabled: boolean("disabled", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        onBlur: action('blur fired!'),
      }
    }),
    {
    notes: {markdown: inputMD }
    }
  );
 
  storiesOf("Form Components|Input Text", module)
    .addDecorator(
      moduleMetadata({
        imports: [DXCInputTextModule,BrowserModule, BrowserAnimationsModule],
      })
    )
    .add(
      "Knobs example",
      () => ({
        template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
                       <dxc-input-text  
                       [suffixIconSrc]="suffixIconSrc"
                       [prefixIconSrc]="prefixIconSrc"
                       [suffix]="suffix"
                       [prefix]="prefix"
                       [label]="label"
                       [invalid]="invalid"
                       [assistiveText]="assistiveText"
                       [theme]="theme"
                       [disabled]="disabled"
                       [required]="required"
                       (blur)="onBlur($event)"
                       (change)="valueChanged($event)"
                       >
                       </dxc-input-text>
  
                     </div>
                        `,
        props: {
          suffix: text("Suffix", ""),
          prefix: text("Prefix" , "(+34)" ),
          suffixIconSrc:text("suffixIconSrc","/telephone.svg"),
          prefixIconSrc:text("prefixIconSrc",""),
          label:text("label", "Phone Number"),
          invalid: boolean('Invalid',false),
          assistiveText: text("Assistive Text", "I am an assistive text"),
          valueChange: action("option selected!"),
          required: boolean("required", false),
          disabled: boolean("disabled", false),
          theme: select("theme", { light: "light", dark: "dark" }, "light"),
          onBlur: action('blur fired!'),
          valueChanged: action('input string fired!'),

        }
      }),
      {
        notes: { markdown: inputMD }
      }
    );
