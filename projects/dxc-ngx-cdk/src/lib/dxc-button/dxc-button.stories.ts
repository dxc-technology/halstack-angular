import { storiesOf, moduleMetadata } from "@storybook/angular";
import buttonMD from "./README.md";
import { text, boolean, select } from "@storybook/addon-knobs";
import { DxcButtonModule } from "./dxc-button.module";
import { action } from "@storybook/addon-actions";

storiesOf("Form Components|Button", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcButtonModule]
    })
  )
  .add("Types", () => ({
    template: `
      <h3> Light </h3>
      <div>
        <dxc-button (onClick)="onClick($event)" mode="basic" label="Basic"></dxc-button>
        <dxc-button (onClick)="onClick($event)" mode="raised" label="Raised"></dxc-button>
        <dxc-button (onClick)="onClick($event)" mode="flat" label="Flat"></dxc-button>
        <dxc-button (onClick)="onClick($event)" mode="outlined" label="Outlined"></dxc-button>
      </div>
      <div>
        <dxc-button (onClick)="onClick($event)" [disabled]="true" mode="basic" label="Basic"></dxc-button>
        <dxc-button (onClick)="onClick($event)" [disabled]="true" mode="raised" label="Raised"></dxc-button>
        <dxc-button (onClick)="onClick($event)" [disabled]="true" mode="flat" label="Flat"></dxc-button>
        <dxc-button (onClick)="onClick($event)" [disabled]="true" mode="outlined" label="Outlined"></dxc-button>
      </div>
      <h3> Dark </h3>
      <div style="background:black" >
        <div>
          <dxc-button (onClick)="onClick($event)" theme="dark" mode="basic" label="Basic"></dxc-button>
          <dxc-button (onClick)="onClick($event)" theme="dark" mode="raised" label="Raised"></dxc-button>
          <dxc-button (onClick)="onClick($event)" theme="dark" mode="flat" label="Flat"></dxc-button>
          <dxc-button (onClick)="onClick($event)" theme="dark" mode="outlined" label="Outlined"></dxc-button>
        </div>
        <div>
          <dxc-button (onClick)="onClick($event)" theme="dark" [disabled]="true" mode="basic" label="Basic"></dxc-button>
          <dxc-button (onClick)="onClick($event)" theme="dark" [disabled]="true" mode="raised" label="Raised"></dxc-button>
          <dxc-button (onClick)="onClick($event)" theme="dark" [disabled]="true" mode="flat" label="Flat"></dxc-button>
          <dxc-button (onClick)="onClick($event)" theme="dark" [disabled]="true" mode="outlined" label="Outlined"></dxc-button>
        </div>
      </div>
      <h3> With Icon </h3>
      <div>
        <dxc-button (onClick)="onClick($event)" mode="basic" label="Basic"></dxc-button>
        <dxc-button (onClick)="onClick($event)" mode="raised" label="Raised"></dxc-button>
        <dxc-button (onClick)="onClick($event)" mode="flat" label="Flat"></dxc-button>
        <dxc-button (onClick)="onClick($event)" mode="outlined" label="Outlined"></dxc-button>
      </div>
      <div>
        <dxc-button (onClick)="onClick($event)" [disabled]="true" mode="basic" label="Basic"></dxc-button>
        <dxc-button (onClick)="onClick($event)" [disabled]="true" mode="raised" label="Raised"></dxc-button>
        <dxc-button (onClick)="onClick($event)" [disabled]="true" mode="flat" label="Flat"></dxc-button>
        <dxc-button (onClick)="onClick($event)" [disabled]="true" mode="outlined" label="Outlined"></dxc-button>
      </div>
      `,
    props: {
      onClick: action("Click fired!")
    }
  }));

storiesOf("Form Components|Button", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcButtonModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
            <dxc-button  
              [mode]="mode"
              [theme] = "theme"
              [icon] = "icon"
              [iconType] = "iconType"
              [disabled] = "disabled"  
              [iconPosition] = "iconPosition"
              [label] = "label"
              (onClick)="onClick($event)">
            </dxc-button>
         </div>`,
      props: {
        icon: text("icon", "photo_camera"),
        iconType: select("iconType", { fa: "fa", mat: "mat" }, "mat"),
        mode: select(
          "mode",
          {
            basic: "basic",
            raised: "raised",
            flat: "flat",
            outlined: "outlined"
          },
          "basic"
        ),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        disabled: boolean("disabled", false),
        iconPosition: select(
          "iconPosition",
          { before: "before", after: "after" },
          "before"
        ),
        label: text("label", "Button example"),
        onClick: action("Click fired!")
      }
    }),
    {
      notes: { markdown: buttonMD }
    }
  );
