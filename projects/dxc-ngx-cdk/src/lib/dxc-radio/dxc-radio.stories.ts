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
        ></dxc-radio>

        <dxc-radio
        [checked]="checked"
        [labelPosition]="before"
        label="Label before"
        ></dxc-radio>
        
        <dxc-radio
        [checked]="checked"
        [labelPosition]="'after'"
        label="Label after"
        ></dxc-radio>
        
        <dxc-radio
        [disabled] = "true"
        [labelPosition]="'before'"
        label= "Disabled radio unchecked"
        ></dxc-radio>

        <dxc-radio
        [checked] = "true"
        [disabled] = "true"
        [labelPosition]="'before'"
        label="Disabled radio"
        ></dxc-radio>
      
        
        <dxc-radio
        (checkedChange)="showAlert()"
        label="Required checbkox"
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
          ></dxc-radio>

          <dxc-radio
          [checked]="false"
          labelPosition="before"
          [theme]="'dark'"
          label="Label before"
          ></dxc-radio>
      
          <dxc-radio
          [checked]="false"
          [theme]="'dark'"
          [labelPosition]="'after'"
          label="Label after"
          ></dxc-radio>
      
          <dxc-radio
          [checked]="false"
          [disabled] = "true"
          [theme]="'dark'"
          [labelPosition]="'before'"
          label="Disabled radio"
          ></dxc-radio>
      
          <dxc-radio
          [checked]="true"
          [disabled] = "true"
          [theme]="'dark'"
          [labelPosition]="'before'"
          label="Disabled radio"
          ></dxc-radio>
      

          <dxc-radio
          (checkedChange)="showAlert()"
          [theme]="'dark'"
          label= "Radio"
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
        text: text("text", "Radio example"),
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
