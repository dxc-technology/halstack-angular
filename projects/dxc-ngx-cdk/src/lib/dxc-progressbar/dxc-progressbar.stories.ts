import { storiesOf, moduleMetadata } from "@storybook/angular";
import progressMD from "./README.md";
import { text, boolean, select } from "@storybook/addon-knobs";
import { DxcProgressbarModule } from "./dxc-progressbar.module";

storiesOf("Form Components|Progressbar", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcProgressbarModule]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
      <h3> Light </h3>
      <div style="height: 400px; background-color: #EEEEEE; display: flex; align-items: center; flex-wrap: wrap;">
        <div style="margin-bottom: 40px; width: 100%">
          <dxc-progressbar value="50"></dxc-progressbar>
        </div>
        <div style="width: 100%">
          <dxc-progressbar label="LOADING..." [showValue]="true" value="75"></dxc-progressbar>
        </div>
        <h4>indeterminate</h4>
        <div style="margin-bottom: 40px; width: 100%">
          <dxc-progressbar></dxc-progressbar>
        </div>
        <div style="width: 100%">
          <dxc-progressbar label="LOADING..."></dxc-progressbar>
        </div>
      </div>
      <h3> Dark </h3>
      <div style="height: 400px; background-color: #666666; display: flex; align-items: center; flex-wrap: wrap;">
        <div style="margin-bottom: 40px; width: 100%">
          <dxc-progressbar theme="dark" value="50"></dxc-progressbar>
        </div>
        <div style="width: 100%">
          <dxc-progressbar theme="dark" label="LOADING..." [showValue]="true" value="75"></dxc-progressbar>
        </div>
        <h4 style="color: #FFFFFF">indeterminate</h4>
        <div style="margin-bottom: 40px; width: 100%">
          <dxc-progressbar theme="dark" ></dxc-progressbar>
        </div>
        <div style="width: 100%">
          <dxc-progressbar theme="dark" label="LOADING..."></dxc-progressbar>
        </div>
      </div>
      
      
      `,
      props: {}
    }),
    {
      notes: { markdown: progressMD }
    }
  );

storiesOf("Form Components|Progressbar", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcProgressbarModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `
      <div [ngStyle]= "{'background':theme==='dark' ? '#666666' : '#EEEEEE', 'height': '100vh'}" >
        <dxc-progressbar [value]="value" [showValue]="showValue" [theme]="theme" [overlay]="overlay" [label]="label"></dxc-progressbar>
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
      notes: { markdown: progressMD }
    }
  );
