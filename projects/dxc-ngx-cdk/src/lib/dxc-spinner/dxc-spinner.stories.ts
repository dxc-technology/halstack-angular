import { storiesOf, moduleMetadata } from "@storybook/angular";
import spinnerMD from "./README.md";
import { text, boolean, select } from "@storybook/addon-knobs";
import { DxcSpinnerModule } from "./dxc-spinner.module";
import { action } from "@storybook/addon-actions";

storiesOf("Form Components|Spinner", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcSpinnerModule]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
      <h3> Light </h3>
      <div style="display: flex; align-items: center; justify-content: space-around; height: 180px; background-color: #EEEEEE;">
        <dxc-spinner [overlay]="false" label="PROCESSING..."></dxc-spinner>
        <dxc-spinner [overlay]="false" value="75"></dxc-spinner>
        <dxc-spinner [overlay]="false" label="LOADING... " [showValue]="true" value="50"></dxc-spinner>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-around; background-color: #000000B3; height: 180px;">
        <dxc-spinner label="PROCESSING..."></dxc-spinner>
        <dxc-spinner value="75"></dxc-spinner>
        <dxc-spinner label="LOADING... " [showValue]="true" value="50"></dxc-spinner>
      </div>
      <h3> Dark </h3>
      <div style="display: flex; align-items: center; justify-content: space-around; height: 180px; background-color: #666666;">
        <dxc-spinner theme="dark" [overlay]="false" label="PROCESSING..."></dxc-spinner>
        <dxc-spinner theme="dark" [overlay]="false" value="75"></dxc-spinner>
        <dxc-spinner theme="dark" [overlay]="false" label="LOADING... " [showValue]="true" value="50"></dxc-spinner>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-around; background-color: #000000B3; height: 180px;">
        <dxc-spinner theme="dark" label="PROCESSING..."></dxc-spinner>
        <dxc-spinner theme="dark" value="75"></dxc-spinner>
        <dxc-spinner theme="dark" label="LOADING... " [showValue]="true" value="50"></dxc-spinner>
      </div>
      
      `,
      props: {}
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
      template: `<div [ngStyle]= "{'background':theme==='dark' ? '#666666' : '#EEEEEE', 'display':'flex', 'justify-content':'center', 'align-items':'center', 'height': '100vh'}" >
        <dxc-spinner [value]="value" [showValue]="showValue" [theme]="theme" [overlay]="overlay" [label]="label"></dxc-spinner>
      </div>`,
      props: {
        overlay: boolean("Overlay", false),
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
