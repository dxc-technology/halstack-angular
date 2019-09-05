import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { DxcSwitchModule } from "./dxc-switch.module";
import switchMD from "./README.md";

storiesOf("Form Components|Switch", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcSwitchModule]
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

      <div>
        <dxc-switch
        [checked]="true"
        [labelPosition]="'after'"
        [theme]="'light'"
        [label]="'Switch label after'"
        name="switch1"
        [value]=1
        (click)="onChange($event)"
        ></dxc-switch>

        <dxc-switch
        [checked]="true"
        (click)="onChange($event)"
        [labelPosition]="'before'"
        [label]="'Switch label before'"
        name="switch2"
        ></dxc-switch>

        <dxc-switch
        [checked]="false"
        [disabled]="true"
        [labelPosition]="'before'"
        [label]="'Switch disabled unchecked'"
        name="switch3"
        ></dxc-switch>

        <dxc-switch
        [checked]="true"
        [disabled]="true"
        [labelPosition]="'before'"
        [label]="'Switch disabled checked'"
        name="switch4"
        ></dxc-switch>

        <dxc-switch
        [checked]="true"
        [labelPosition]="'after'"
        [required]="true"
        [label]="'Switch required'"
        (click)="onChange($event)"
        name="switch5"
        ></dxc-switch>

        <dxc-switch
        [checked]="true"
        [disabled]="true"
        [labelPosition]="'before'"
        [required]="true"
        [label]="'Switch required disabled'"
        name="switch6"
        ></dxc-switch>

      </div>
      
      <h3 style="display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;"
      >Dark</h3>

      <div style="background:black;">

        <dxc-switch
        [checked]="true"
        [labelPosition]="'after'"
        [theme]="'dark'"
        (click)="onChange($event)"
        [label]="'Switch label after'"
        name="switch1"
        [value]=1
        ></dxc-switch>

        <dxc-switch
        [checked]="true"
        (click)="onChange($event)"
        [labelPosition]="'before'"
        [theme]="'dark'"
        [label]="'Switch label before'"
        name="switch2"
        ></dxc-switch>

        <dxc-switch
        [checked]="false"
        [disabled]="true"
        [labelPosition]="'before'"
        [theme]="'dark'"
        [label]="'Switch disabled unchecked'"
        name="switch3"
        ></dxc-switch>

        <dxc-switch
        [checked]="true"
        [disabled]="true"
        [labelPosition]="'before'"
        [theme]="'dark'"
        [label]="'Switch disabled checked'"
        name="switch4"
        ></dxc-switch>

        <dxc-switch
        [checked]="true"
        [labelPosition]="'after'"
        [theme]="'dark'"
        [required]="true"
        (click)="onChange($event)"
        [label]="'Switch required'"
        name="switch5"
        ></dxc-switch>

        <dxc-switch
        [checked]="true"
        [disabled]="true"
        [labelPosition]="'before'"
        [theme]="'dark'"
        [required]="true"
        [label]="'Switch required disabled'"
        name="switch6"
        ></dxc-switch>

      </div>

      `,
      props: {
        onChange: action("Change fired!")
      }
    }),
    {
      notes: { markdown: switchMD }
    }
  );
storiesOf("Form Components|Switch", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcSwitchModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF', 'height': '50px'}" >
                    <dxc-switch
                    [label]="label"
                    [checked]="checked"
                    [labelPosition]="labelPosition ? labelPosition : 'before'"
                    [disableRipple]="disableRipple"
                    [disabled]="disabled"
                    [required]="required"
                    [theme]="theme">
                    </dxc-switch>
                </div>`,
      props: {
        label: text("label", "Switch example"),
        checked: boolean("checked", false),
        labelPosition: select(
          "labelPosition",
          { before: "before", after: "after" },
          "before"
        ),
        disableRipple: boolean("disableRipple", false),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        disabled: boolean("disabled", false),
        required: boolean("required", false),
        onClick: action("Click fired!")
      }
    }),
    {
      notes: { markdown: switchMD }
    }
  );
