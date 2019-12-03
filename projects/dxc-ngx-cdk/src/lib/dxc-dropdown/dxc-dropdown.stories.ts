import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import dropdownMD from "./README.md";
import { boolean, select, array, text, object } from "@storybook/addon-knobs";
import "hammerjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { DXCDropdownModule } from "./dxc-dropdown.module";
const defaultValue = [
  { label: "Macaw", value: "macaw", iconSrc: "./macaw.svg" },
  { label: "Toucan", value: "toucan", iconSrc: "/toucan.svg" }
];
let noIcons = [
  { label: "Macaw", value: "macaw" },
  { label: "Toucan", value: "toucan" }
];
const iconsText = [
  { label: "Macaw", value: "macaw", iconSrc: "./macaw.svg" },
  { label: "Toucan", value: "toucan", iconSrc: "/toucan.svg" }
];
const icons = [
  { value: "macaw", iconSrc: "./macaw.svg" },
  { value: "toucan", iconSrc: "/toucan.svg" }
];

storiesOf("Form Components|Dropdown", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCDropdownModule, BrowserModule, BrowserAnimationsModule]
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
      <div style="display: flex; align-items: center;">
        <dxc-dropdown [options] = "options"
        [label] = "'Select a bird'"
        (selectOption) = "selectOption($event)"
        [mode] = "'basic'"
        ></dxc-dropdown>
   
  
        <dxc-dropdown [options] = "optionsTextIcons"
        [iconSrc] ="'./bird.svg'"
        [label] = "'Select a bird with icons'"
        (selectOption) = "selectOption($event)"
        [mode] = "'basic'"
        ></dxc-dropdown>

        <dxc-dropdown [options] = "optionsOnlyIcons"
        [iconSrc] ="'./bird.svg'"
        (selectOption) = "selectOption($event)"
        [mode] = "'basic'"
        [showCaret] = "false"
        ></dxc-dropdown>

        <dxc-dropdown [options] = "options"
        [label] = "'Select a bird'"
        (selectOption) = "selectOption($event)"
        [mode] = "'outlined'"
        ></dxc-dropdown>
   
  
        <dxc-dropdown [options] = "optionsTextIcons"
        [iconSrc] ="'./bird.svg'"
        [label] = "'Select a bird with icons'"
        (selectOption) = "selectOption($event)"
        [mode] = "'outlined'"
        ></dxc-dropdown>

        <dxc-dropdown [options] = "optionsOnlyIcons"
        [iconSrc] ="'./bird.svg'"
        (selectOption) = "selectOption($event)"
        [mode] = "'outlined'"
        [showCaret] = "false"
        ></dxc-dropdown>
      </div>

      <h3 style="display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;"
      >Dark</h3>

      <div style="background: black; display: flex; align-items: center;" >
        <dxc-dropdown [options] = "options"
        [label] = "'Select a bird'"
        [theme] ="'dark'"
        (selectOption) = "selectOption($event)"
        [mode] = "'basic'"
        ></dxc-dropdown>

        <dxc-dropdown [options] = "optionsTextIcons"
        [iconSrc] ="'./bird.svg'"
        [theme] ="'dark'"
        [label] = "'Bird with icons'"
        (selectOption) = "selectOption($event)"
        [mode] = "'basic'"
        ></dxc-dropdown>

        <dxc-dropdown [options] = "optionsOnlyIcons"
        [iconSrc] ="'./bird.svg'"
        [theme] ="'dark'"
        (selectOption) = "selectOption($event)"
        [mode] = "'basic'"
        [showCaret] = "false"
        ></dxc-dropdown>

        <dxc-dropdown [options] = "options"
        [label] = "'Select a bird'"
        [theme] ="'dark'"
        (selectOption) = "selectOption($event)"
        [mode] = "'outlined'"
        ></dxc-dropdown>

        <dxc-dropdown [options] = "optionsTextIcons"
        [iconSrc] ="'./bird.svg'"
        [theme] ="'dark'"
        [label] = "'Bird with icons'"
        (selectOption) = "selectOption($event)"
        [mode] = "'outlined'"
        ></dxc-dropdown>

        <dxc-dropdown [options] = "optionsOnlyIcons"
        [iconSrc] ="'./bird.svg'"
        [theme] ="'dark'"
        (selectOption) = "selectOption($event)"
        [mode] = "'outlined'"
        [showCaret] = "false"
        ></dxc-dropdown>
      </div>
      `,

      props: {
        options: object("Options", noIcons),
        optionsOnlyIcons: object("OptionsOnlyIcons", icons),
        optionsTextIcons: object("OptionsTextAndIcon", iconsText),
        valueChange: action("Change fired!")
      }
    }),
    {
      notes: { markdown: dropdownMD }
    }
  );

storiesOf("Form Components|Dropdown", module)
  .addDecorator(
    moduleMetadata({
      imports: [DXCDropdownModule, BrowserModule, BrowserAnimationsModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >
      <dxc-dropdown [options] = "optionsTextIcons"
        [disabled] = "disabled"
        [iconSrc]="iconSrc"
        [theme] = "theme"
        [label] = "label"
        (selectOption) = "selectOption($event)"
        [iconPosition] = "iconPosition"
        [optionsIconPosition]="optionsIconPosition"
        [showCaret] = "showCaret"
        [mode] = "mode"
        >
    </dxc-dropdown>
                     </div>
                        `,
      props: {
        iconPosition: select(
          "Icon position",
          { before: "before", after: "after" },
          "before"
        ),
        optionsIconPosition: select(
          "Option icon position",
          { before: "before", after: "after" },
          "before"
        ),
        iconSrc: text("iconSrc", "./bird.svg"),
        label: text("label", "Dropdown example"),
        optionsTextIcons: object("OptionsTextAndIcon", iconsText),
        selectOption: action("option selected!"),
        disabled: boolean("disabled", false),
        showCaret: boolean("Show Caret", true),
        theme: select("theme", { light: "light", dark: "dark" }, "light"),
        mode: select("mode", { basic: "basic", outlined: "outlined" }, "basic")
      }
    }),
    {
      notes: { markdown: dropdownMD }
    }
  );
