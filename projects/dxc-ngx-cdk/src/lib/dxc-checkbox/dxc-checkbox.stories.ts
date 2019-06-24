import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { DxcCheckboxModule } from "./dxc-checkbox.module";
import { DxcCheckboxComponent } from "./dxc-checkbox.component";
import checkboxMD from "./README.md";

storiesOf("Form Components|Checkbox", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcCheckboxModule]
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
    
        <dxc-checkbox
        [checked]="true"
        [labelPosition]="before"
        text="Checkbox 1"
        ></dxc-checkbox>

        <dxc-checkbox
        [checked]="checked"
        [labelPosition]="before"
        text="Label before"
        ></dxc-checkbox>
        
        <dxc-checkbox
        [checked]="checked"
        [labelPosition]="'after'"
        text="Label after"
        ></dxc-checkbox>
        
        <dxc-checkbox
        [disabled] = "true"
        [required] = "true"
        [labelPosition]="'before'"
        text= "Disabled checkbox unchecked"
        ></dxc-checkbox>

        <dxc-checkbox
        [checked] = "true"
        [disabled] = "true"
        [required] = "true"
        [labelPosition]="'before'"
        text="Disabled checkbox checked"
        ></dxc-checkbox>
      
        
        <dxc-checkbox
        (checkedChange)="showAlert()"
        [required] = "true"
        text="Required checbkox"
        ></dxc-checkbox>
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
          <dxc-checkbox
          [checked]="true"
          [labelPosition]="'before'"
          [theme]="'dark'"
          text="Checkbox 1"
          ></dxc-checkbox>

          <dxc-checkbox
          [checked]="false"
          labelPosition="before"
          [theme]="'dark'"
          text="Label before"
          ></dxc-checkbox>
      
          <dxc-checkbox
          [checked]="false"
          [theme]="'dark'"
          [labelPosition]="'after'"
          text="Label after"
          ></dxc-checkbox>
      
          <dxc-checkbox
          [checked]="false"
          [disabled] = "true"
          [theme]="'dark'"
          [labelPosition]="'before'"
          text="Disabled checkbox unchecked"
          ></dxc-checkbox>
      
          <dxc-checkbox
          [checked]="true"
          [disabled] = "true"
          [theme]="'dark'"
          [labelPosition]="'before'"
          text="Disabled checkbox checked"
          ></dxc-checkbox>
      

          <dxc-checkbox
          (checkedChange)="showAlert()"
          [theme]="'dark'"
          [required] = "true"
          text= "Required checkbox"
          ></dxc-checkbox>
      
      </div>
      
      `,
      props: {
        checkedChange: action("Change fired!")
      }
    }),
    {
      notes: { markdown: checkboxMD }
    }
  );

storiesOf("Form Components|Checkbox", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcCheckboxModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `
      <div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
      <dxc-checkbox
      [disableRipple]="disableRipple"
      [theme] = "theme"
      [labelPosition] = "labelPosition"
      [required] = "required"
      [disabled] = "disabled"  
      [checked]= "checked"
      (checkedChange) = "checkedChange($event)"
      [text]="text">
      </dxc-checkbox>
   </div>`,
      props: {
        text: text("text", "Checkbox example"),
        checkedChange: action("checked fired!"),
        checked: boolean("checked", false),
        required: boolean("required", false),
        labelPosition: select("labelPosition", { before: "before", after: "after" }, "before"),
        disabled: boolean("disabled", false),
        disableRipple: boolean("disableRipple", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
      }
    }),
    {
      notes: { markdown: checkboxMD }
    }
  );
