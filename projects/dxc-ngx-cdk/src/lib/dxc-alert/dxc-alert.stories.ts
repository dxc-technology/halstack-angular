import { storiesOf, moduleMetadata } from "@storybook/angular";
import alertMD from "./README.md";
import { boolean, array, text, object, select } from "@storybook/addon-knobs";
import { DXCAlertModule } from "./dxc-alert.module";
import { arrayExpression } from "@babel/types";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";

let visible = true;
let visible1 = true;
let visible2 = false;
let visible3 = false;

storiesOf("Form Components|Alert", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCAlertModule, DxcButtonModule]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
      <dxc-button label="info alert" (onClick)="onClick($event)"></dxc-button>
      <dxc-alert [isVisible]="visible" isCloseVisible="true" inlineText="Information header" (onClose)="onClick($event)">
      </dxc-alert>
      <dxc-button label="warning alert" (onClick)="onClick1($event)"></dxc-button>
      <dxc-alert [isVisible]="visible1" type="warning" inlineText="Warning header" (onClose)="onClick1($event)">
      <span>Content</span>
      </dxc-alert>
      <dxc-button label="error alert" (onClick)="onClick2($event)"></dxc-button>
      <dxc-alert [isVisible]="visible2" mode="modal" type="error" inlineText="Error header" (onClose)="onClick2($event)">
      <span>Content</span>
      </dxc-alert>
      <dxc-button label="confirm alert" (onClick)="onClick3($event)"></dxc-button>
      <dxc-alert [isVisible]="visible3" mode="modal" type="confirm" inlineText="Confirm header" (onClose)="onClick3($event)">
      </dxc-alert>
      `,

      props: {
        visible: boolean("Info Alert", true),
        visible1: boolean("Warning Alert", true),
        visible2: boolean("Error Alert", false),
        visible3: boolean("Confirm Alert", false),
        onClick: function(event) {
          this.visible = !this.visible;
        },
        onClick1: function(event) {
          this.visible1 = !this.visible1;
        },
        onClick2: function(event) {
          this.visible2 = !this.visible2;
        },
        onClick3: function(event) {
          this.visible3 = !this.visible3;
        }
        
      }
    }),
    {
      notes: { markdown: alertMD }
    }
  );

storiesOf("Form Components|Alert", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCAlertModule, DxcButtonModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div >
        <dxc-button label="alert 1" (onClick)="onClick($event)"></dxc-button>
        <dxc-alert [isVisible]="visible" [isCloseVisible]="isCloseVisible" [type]="type" [mode]="mode" [inlineText]="inlineText" (onClose)="onClick($event)"></dxc-alert>
        <dxc-button label="alert 2" (onClick)="onClick1($event)"></dxc-button>
        <dxc-alert [isVisible]="visible1" [isCloseVisible]="isCloseVisible" [type]="type" [mode]="mode" [inlineText]="inlineText" (onClose)="onClick1($event)"> <span>Content</span> </dxc-alert>
      </div>
      `,
      props: {
        mode: select("mode", { inline: "inline", modal: "modal" }, "inline"),
        type: select("type", { info: "info", warning: "warning", error: "error", confirm: "confirm" }, "info"),
        inlineText: text("inlineText", "InlineText"),
        visible: boolean("Is Visible", false),
        onClick: function( event ) {
          this.visible = !this.visible;
        },
        visible1: boolean("Is second alert Visible", false),
        isCloseVisible: boolean("IsCloseVisible", false),
        onClick1: function( event ) {
          this.visible1 = !this.visible1;
        }
      }
    }),
    {
      notes: { markdown: alertMD }
    }
  );
