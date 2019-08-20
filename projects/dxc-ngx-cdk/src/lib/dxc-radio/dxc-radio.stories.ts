import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { DxcRadioModule } from "./dxc-radio.module";
import { DxcRadioComponent } from "./dxc-radio.component";
import radioMD from "./README.md";


storiesOf("Form Components|Radio", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcRadioModule]
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
      <div class= "light">
    
        <dxc-radio
        [checked]="true"
        [labelPosition]="before"
        label="Radio 1"
        name="radio1"
        [value]=1
        ></dxc-radio>

        <dxc-radio
        [labelPosition]="before"
        label="Label before"
        name="radio2"
        ></dxc-radio>
        
        <dxc-radio
        [labelPosition]="'after'"
        label="Label after"
        name="radio3"
        ></dxc-radio>
        
        <dxc-radio
        [disabled] = "true"
        [labelPosition]="'before'"
        label= "Disabled radio unchecked"
        name="radio4"
        ></dxc-radio>

        <dxc-radio
        [checked] = "true"
        [disabled] = "true"
        [labelPosition]="'before'"
        label="Disabled radio"
        name="radio5"
        ></dxc-radio>
      
        
        <dxc-radio
        (checkedChange)="showAlert()"
        label="Required radio"
        name="radio6"
        required="true"
        ></dxc-radio>
      </div>

      <h3 style="display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;"
      >Dark</h3>
      <div style="background:black" >            
          <dxc-radio
          [checked]="true"
          [labelPosition]="'before'"
          [theme]="'dark'"
          label="Radio 1"
          name="radio7"
          ></dxc-radio>

          <dxc-radio
          [checked]="false"
          labelPosition="before"
          [theme]="'dark'"
          label="Label before"
          name="radio8"
          ></dxc-radio>
      
          <dxc-radio
          [checked]="false"
          [theme]="'dark'"
          [labelPosition]="'after'"
          label="Label after"
          name="radio9"
          ></dxc-radio>
      
          <dxc-radio
          [checked]="false"
          [disabled] = "true"
          [theme]="'dark'"
          [labelPosition]="'before'"
          label="Disabled unchecked radio"
          name="radio10"
          ></dxc-radio>
      
          <dxc-radio
          [checked]="true"
          [disabled] = "true"
          [theme]="'dark'"
          [labelPosition]="'before'"
          label="Disabled radio"
          name="radio11"
          ></dxc-radio>
      

          <dxc-radio
          (checkedChange)="showAlert()"
          [labelPosition]="'after'"
          [theme]="'dark'"
          label="Required radio"
          name="radio12"
          required="true"
          ></dxc-radio>
      
      </div>
      
      `,
      props: {
        checkedChange: action("Change fired!")
      }
    }),
    {
      notes: { markdown: radioMD }
    }
  );
  storiesOf("Form Components|Radio", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcRadioModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `
      <div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
      <dxc-radio
      [disableRipple]="disableRipple"
      [theme] = "theme"
      [labelPosition] = "labelPosition"
      [disabled] = "disabled"  
      [checked]= "checked"
      (checkedChange) = "checkedChange($event)"
      [label]="label">
      </dxc-radio>
   </div>`,
      props: {
        label: text("label", "Radio example"),
        checkedChange: action("checked fired!"),
        checked: boolean("checked", false),
        labelPosition: select("labelPosition", { before: "before", after: "after" }, "before"),
        disabled: boolean("disabled", false),
        disableRipple: boolean("disableRipple", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
      }
    }),
    {
      notes: { markdown: radioMD }
    }
  );
