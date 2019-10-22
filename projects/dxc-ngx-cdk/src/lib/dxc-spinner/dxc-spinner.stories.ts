import { storiesOf, moduleMetadata } from "@storybook/angular";
import spinnerMD from "./README.md";
import { text, boolean, select } from "@storybook/addon-knobs";
import { DxcSpinnerModule } from "./dxc-spinner.module";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { action } from "@storybook/addon-actions";

storiesOf("Form Components|Spinner", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcSpinnerModule, DxcButtonModule]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
      <h3> Light </h3>
      <div style="display: flex; align-items: center; justify-content: space-around; height: 180px; background-color: #EEEEEE;">
        <dxc-spinner [mode]="'large'" label="PROCESSING..."></dxc-spinner>
        <dxc-spinner [mode]="'large'" value="75"></dxc-spinner>
        <dxc-spinner [mode]="'large'" label="LOADING... " [showValue]="true" value="50"></dxc-spinner>
        <dxc-spinner [mode]="'small'" label="PROCESSING..."></dxc-spinner>
      </div>
      
      <h3> Dark </h3>
      <div style="display: flex; align-items: center; justify-content: space-around; height: 180px; background-color: #666666;">
        <dxc-spinner theme="dark" [mode]="'large'" label="PROCESSING..."></dxc-spinner>
        <dxc-spinner theme="dark" [mode]="'large'" value="75"></dxc-spinner>
        <dxc-spinner theme="dark" [mode]="'large'" label="LOADING... " [showValue]="true" value="50"></dxc-spinner>
        <dxc-spinner theme="dark" [mode]="'small'" label="PROCESSING..."></dxc-spinner>
      </div>
      <dxc-button (onClick)="onClick($event)" mode="basic" label="Overlay"></dxc-button>
      <div *ngIf="overlay">
        <dxc-spinner theme="light" [mode]="'overlay'" label="PROCESSING..."></dxc-spinner>
      </div>
      
      `,
      props: {
        overlay: boolean("Overlay", false),
        onClick: function(){this.overlay = !this.overlay;}
      }
    }),
    {
      notes: { markdown: spinnerMD }
    }
  );

storiesOf("Form Components|Spinner", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcSpinnerModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div [ngStyle]= "{'background':theme==='dark' ? '#666666' : '', 'height': '200px'}" >
        <dxc-spinner [value]="value" [showValue]="showValue" [theme]="theme" [mode]="mode" [label]="label"></dxc-spinner>
      </div>`,
      props: {
        mode: select("mode", { small: "small", large: "large", overlay: "overlay" }, "large"),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        label: text("label", "LABEL"),
        showValue: boolean("Show Value", false),
        value: text("value", "")
      }
    }),
    {
      notes: { markdown: spinnerMD }
    }
  );
