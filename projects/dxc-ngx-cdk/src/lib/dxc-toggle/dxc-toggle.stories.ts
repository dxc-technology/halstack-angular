import { storiesOf, moduleMetadata } from "@storybook/angular";
import toggleMD from "./README.md";
import { boolean, select, text, object } from "@storybook/addon-knobs";
import { DXCToggleModule } from "./dxc-toggle.module";
import { arrayExpression } from "@babel/types";
import { action } from "@storybook/addon-actions";

storiesOf("Form Components|Toggle", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCToggleModule]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
        <h3>Light</h3>
        <div style="display: flex; align-items: center" >
          <dxc-toggle selected=true theme="light" mode="basic" iconSrc="/money.svg" (onClick)="onClick($event.source.checked)" label="Toggle"></dxc-toggle>
          <dxc-toggle selected=false theme="light" mode="outlined" (onClick)="onClick($event.source.checked)" label="Toggle 2"></dxc-toggle>
          <dxc-toggle selected=false theme="light" mode="basic" iconSrc="/money.svg" (onClick)="onClick($event.source.checked)"></dxc-toggle>
          <dxc-toggle selected=false theme="light" mode="outlined" iconSrc="/money.svg" (onClick)="onClick($event.source.checked)"></dxc-toggle>

          <dxc-toggle selected=true disableRipple=false disabled=true theme="light" mode="basic" iconSrc="/money.svg" (onClick)="onClick($event.source.checked)" label="Disabled"></dxc-toggle>
          <dxc-toggle selected=false disableRipple=false disabled=true theme="light" mode="outlined" (onClick)="onClick($event.source.checked)" label="Disabled"></dxc-toggle>
        </div>

        <h3>Dark</h3>
        <div style="display: flex; align-items: center; background: black" >
          <dxc-toggle selected=true theme="dark" mode="basic" iconSrc="/money.svg" (onClick)="onClick($event.source.checked)" label="Toggle"></dxc-toggle>
          <dxc-toggle selected=false theme="dark" mode="outlined" (onClick)="onClick($event.source.checked)" label="Toggle 2"></dxc-toggle>
          <dxc-toggle selected=false theme="dark" mode="basic" iconSrc="/money.svg" (onClick)="onClick($event.source.checked)"></dxc-toggle>
          <dxc-toggle selected=false theme="dark" mode="outlined" iconSrc="/money.svg" (onClick)="onClick($event.source.checked)"></dxc-toggle>

          <dxc-toggle selected=true disableRipple=false disabled=true theme="dark" mode="basic" iconSrc="/money.svg" (onClick)="onClick($event.source.checked)" label="Disabled"></dxc-toggle>
          <dxc-toggle selected=false disableRipple=false disabled=true theme="dark" mode="outlined" (onClick)="onClick($event.source.checked)" label="Disabled"></dxc-toggle>
        </div>
      `,

      props: {
        onClick: action("checked")
      }
    }),
    {
      notes: { markdown: toggleMD }
    }
  );

storiesOf("Form Components|Toggle", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCToggleModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
        <dxc-toggle  
        [mode]="mode"
        [disabled] = "disabled"
        [theme] = "theme"
        [disableRipple] = "disableRipple" 
        [selected] = "selected" 
        iconSrc = "/money.svg"
        [label] = "label"
        [iconPosition]="iconPosition"
        (onClick)="onClick($event)">
        </dxc-toggle>
      </div>
      `,
      props: {
        mode: select(
          "mode",
          {
            basic: "basic",
            outlined: "outlined"
          },
          "basic"
        ),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        disabled: boolean("disabled", false),
        disableRipple: boolean("disableRipple", false),
        iconPosition: select(
          "iconPosition",
          { before: "before", after: "after" },
          "before"
        ),
        label: text("label", "Toggle example"),
        onClick: action("checked"),
        selected: boolean("selected", false),
      }
    }),
    {
      notes: { markdown: toggleMD }
    }
  );
