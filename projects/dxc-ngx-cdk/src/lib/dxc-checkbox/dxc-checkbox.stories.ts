import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
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
      <div class= "light">
      <dxc-checkbox
      [(ngModel)]="checked"
      labelPosition="before"
      text="Checkbox 1"
      ></dxc-checkbox>
      <br />
      <dxc-checkbox
      [(ngModel)]="checked"
      labelPosition="before"
      text="Checkbox 2"
      ></dxc-checkbox>
      
      <dxc-checkbox
      [(ngModel)]="checked"
      labelPosition="after"
      text="Checkbox 3"
      ></dxc-checkbox>
      
      <dxc-checkbox
      disabled
      required
      labelPosition="before"
      text="Checkbox 4"
      ></dxc-checkbox>
      
      <dxc-checkbox
      indeterminate
      (change)="showAlert()"
      text="Checkbox 5"
      ></dxc-checkbox>
      
      <dxc-checkbox></dxc-checkbox>
      
      <dxc-checkbox
      indeterminate
      (change)="showAlert()"
      required
      text="Checkbox 7"
      ></dxc-checkbox>
      </div>
      <div class="dark"> 
            
          <dxc-checkbox
          [(ngModel)]="checked"
          labelPosition="before"
          [theme]="'dark'"
          text="Checkbox 1"
          ></dxc-checkbox>
          <br />
          <dxc-checkbox
          [(ngModel)]="checked"
          labelPosition="before"
          [theme]="'dark'"
          text="Checkbox 2"
          ></dxc-checkbox>
      
          <dxc-checkbox
          [(ngModel)]="checked"
          [theme]="'dark'"
          labelPosition="after"
          text="Checkbox 3"
          ></dxc-checkbox>
      
          <dxc-checkbox
          disabled
          required
          [theme]="'dark'"
          labelPosition="before"
          text="Checkbox 4"
          ></dxc-checkbox>
      
          <dxc-checkbox
          indeterminate
          [theme]="'dark'"
          (change)="showAlert()"
          text="Checkbox 5"
          ></dxc-checkbox>
      
          <dxc-checkbox></dxc-checkbox>
      
          <dxc-checkbox
          indeterminate
          (change)="showAlert()"
          [theme]="'dark'"
          required
          text="Checkbox 7"
          ></dxc-checkbox>
      
      </div>
      
      `,
      props: {
        onChange: action("Change fired!")
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
      component: DxcCheckboxComponent,
      props: {
        text: text("text", "Checkbox example"),
        onChange: action("Change fired!")
      }
    }),
    {
      notes: { markdown: checkboxMD }
    }
  );
