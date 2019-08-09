import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import dateMD from "./README.md";
import { boolean, select, text, date } from "@storybook/addon-knobs";
import "hammerjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { DxcDateModule } from './dxc-date.module';
const dateValue = new Date();

function myDateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}
storiesOf("Form Components|Date", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcDateModule, BrowserModule, BrowserAnimationsModule]
    })
  )
  .add(
    "Types",
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
     <h4> Normal  required Date </h4>
      

        <dxc-date 
        [label] = "'Normal Datepicker'"
        [id] ="'firstDate'"
        [required] = true
        [format] ="'DD/MM/YYYY'"
      
        >
        </dxc-date>

        <h4>Custom Icon </h4>
        <dxc-date 
        [label] = "'Date picker with custom icon'"
        [format] ="'DD/MM/YYYY'"
        [id] ="'secondtDate'"
        [iconSrc] = "'/calendar.svg'"
        >
        </dxc-date>

        <h4>Disabled picker </h4>
        <dxc-date 
        [label] = "'Disable Date picker'"
        [disabled] = true
        [format] ="'YYYY-MM-DD'"
        >
        </dxc-date>

        <h4>Picker with min/max dates </h4>
        <dxc-date 
        [label] = "' Date picker with min/max dates'"
        [format] ="'YYYY-MM-DD'"
        [min]= "minDate"
        [max] ="maxDate"
        >
        </dxc-date>

        <h4>Date with variable binding: Value {{dateValue}}</h4>
        <dxc-date 
        [label] = "'Date picker with binding'"
        [(value)] = "dateValue"
        [format] ="'DD/MM/YYYY'"
        [id] ="'thirdDate'"
        >
        </dxc-date>

        
    <div style="background: black;
    width: calc(100% - 380px); 
     margin-right: 200px;
     padding: 20px;" >    
     <h4 style="color:white"> Normal  required Date </h4>
     <dxc-date 
     [label] = "'Normal Datepicker'"
     [id] ="'firstDate'"
     [required] = true
     [format] ="'DD/MM/YYYY'"
     [theme]="'dark'"

   
     >
     </dxc-date>

     <h4 style="color:white" >Custom Icon </h4>
     <dxc-date 
     [label] = "'Date picker with custom icon'"
     [format] ="'DD/MM/YYYY'"
     [id] ="'secondtDate'"
     [iconSrc] = "'/calendar.svg'"
     [theme]="'dark'"

     >
     </dxc-date>

     <h4 style="color:white" >Disabled picker </h4>
     <dxc-date 
     [label] = "'Disable Date picker'"
     [disabled] = true
     [format] ="'YYYY-MM-DD'"
     [theme]="'dark'"

     >
     </dxc-date>

     <h4 style="color:white">Date with variable binding: Value {{dateValue}}</h4>
     <dxc-date 
     [label] = "'Date picker with binding'"
     [(value)] = "dateValue"
     [format] ="'DD/MM/YYYY'"
     [id] ="'thirdDate'"
     [theme]="'dark'"
     >
     </dxc-date>
     </div>
      `,
      props: {
        minDate:  myDateKnob("Min Date",new Date("Jan 20 2010")),
        maxDate: myDateKnob("Max Date",new Date("Jan 20 2020")),
      }
    }),
    {
      notes: { markdown: dateMD }
    }
  );

storiesOf("Form Components|Date", module)
  .addDecorator(
    moduleMetadata({
      imports: [ DxcDateModule, BrowserModule, BrowserAnimationsModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
                  <dxc-date 
                  [format] ="format"
                  [min] ="min"
                  [max]="max"
                  [label]="label"
                  [theme]="theme"
                  [disabled]="disabled"
                  [required]="required"
                  [assistiveText]="assistiveText"
                  [invalid]="invalid"
                  [disableRipple]="disableRipple"               
                  >
                  </dxc-date>
                     </div>
                        `,
      props: {
        min:  myDateKnob("Min Date",new Date("Jan 20 2010")),
        max: myDateKnob("Max Date",new Date("Jan 20 2020")),
        iconSrc: text("iconSrc", "/telephone.svg"),
        label: text("label", "Date"),
        format: text("format", "DD-MM-YYYY"),
        invalid: boolean("Invalid", false),
        assistiveText: text("Assistive Text", "I am an assistive text"),
        valueChange: action("option selected!"),
        required: boolean("required", false),
        disabled: boolean("disabled", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        inputChange: action("blur fired!"),
        valueChanged: action("input string fired!")
      }
    }),
    {
      notes: { markdown: dateMD }
    }
  );
