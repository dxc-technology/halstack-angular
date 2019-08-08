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
     <h4> Normal Date </h4>
      

        <dxc-date 
        [label] = "'Normal Datepicker'"
        [id] ="'firstDate'"
        [format] ="'DD/MM/YYYY'"
      
        >
        </dxc-date>

        
        <dxc-date 
        [label] = "'Date picker with custom icon'"
        [format] ="'DD/MM/YYYY'"
        [id] ="'secondtDate'"
        [iconSrc] = "'/calendar.svg'"
        >
        </dxc-date>

          
        <dxc-date 
        [label] = "'Disable Date picker'"
        [disabled] = "'true'"
        [format] ="'YYYY-MM-DD'"
        >
        </dxc-date>

        <h4>Date with variable binding: Value {{dateValue}}</h4>
        <dxc-date 
        [label] = "'Date picker with custom icon'"
        [(value)] = "dateValue"
        [format] ="'DD/MM/YYYY'"
        [id] ="'thirdDate'"
        >
        </dxc-date>
      `
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
