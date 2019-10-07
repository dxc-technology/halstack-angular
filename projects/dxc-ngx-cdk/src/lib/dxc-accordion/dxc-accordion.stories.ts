import { storiesOf, moduleMetadata } from "@storybook/angular";
import accordionMD from "./README.md";
import { text, boolean, select } from "@storybook/addon-knobs";
import { DxcAccordionModule } from "./dxc-accordion.module";
import { action } from "@storybook/addon-actions";

storiesOf("Form Components|Accordion", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcAccordionModule]
    })
  )
  .add(
    "Types",
    () => ({
      template: `
      <h3> Light </h3>
        <dxc-accordion iconSrc="./love.svg" (onClick)="onClick($event)" theme="light" mode="basic" assistiveText="default accordion" label="Main Header Label">
          <dxc-accordion (onClick)="onClick($event)" iconPosition="after" iconSrc="./love.svg" theme="light" mode="basic" assistiveText="default accordion" label="Main Header Label">
            <p style="margin:0px">Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam dui cubilia sapien dignissim himenaeos, aliquam nec sociis ad et arcu. Neque ultricies senectus faucibus morbi urna lectus eleifend nibh, quisque malesuada vivamus pretium felis cursus aenean, laoreet elementum luctus massa viverra ullamcorper integer. Integer vestibulum enim cursus hendrerit proin pretium nam tempus congue, quam primis vehicula facilisi hac etiam gravida morbi magnis, felis per lectus praesent montes dapibus tellus habitasse. Vivamus eleifend elementum lacinia id leo ultrices per hendrerit, justo augue ullamcorper pellentesque felis ante dictumst viverra tortor, maecenas taciti sed at nascetur eu fringilla.</p>
          </dxc-accordion>
        </dxc-accordion>
        <dxc-accordion (onClick)="onClick($event)" iconSrc="./love.svg" disabled="true" theme="light" mode="basic" assistiveText="default disabled accordion" label="Main Header Label">
        </dxc-accordion>
        <dxc-accordion (onClick)="onClick($event)" theme="light" mode="alternative" assistiveText="alternative accordion" label="Main Header Label">
          <p style="margin:0px">Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam dui cubilia sapien dignissim himenaeos, aliquam nec sociis ad et arcu. Neque ultricies senectus faucibus morbi urna lectus eleifend nibh, quisque malesuada vivamus pretium felis cursus aenean, laoreet elementum luctus massa viverra ullamcorper integer. Integer vestibulum enim cursus hendrerit proin pretium nam tempus congue, quam primis vehicula facilisi hac etiam gravida morbi magnis, felis per lectus praesent montes dapibus tellus habitasse. Vivamus eleifend elementum lacinia id leo ultrices per hendrerit, justo augue ullamcorper pellentesque felis ante dictumst viverra tortor, maecenas taciti sed at nascetur eu fringilla.</p>
        </dxc-accordion>
        <dxc-accordion (onClick)="onClick($event)" disabled="true" theme="light" mode="alternative" assistiveText="alternative disabled accordion" label="Main Header Label">
        </dxc-accordion>
      <h3> Dark </h3>
        <div style="background:black; height:400px; padding-top:20px">
          <dxc-accordion (onClick)="onClick($event)" iconSrc="./love.svg" theme="dark" mode="basic" assistiveText="default accordion" label="Main Header Label">
            <dxc-accordion (onClick)="onClick($event)" iconPosition="after" iconSrc="./love.svg" theme="light" mode="basic" assistiveText="default accordion" label="Main Header Label">
              <p style="margin:0px">Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam dui cubilia sapien dignissim himenaeos, aliquam nec sociis ad et arcu. Neque ultricies senectus faucibus morbi urna lectus eleifend nibh, quisque malesuada vivamus pretium felis cursus aenean, laoreet elementum luctus massa viverra ullamcorper integer. Integer vestibulum enim cursus hendrerit proin pretium nam tempus congue, quam primis vehicula facilisi hac etiam gravida morbi magnis, felis per lectus praesent montes dapibus tellus habitasse. Vivamus eleifend elementum lacinia id leo ultrices per hendrerit, justo augue ullamcorper pellentesque felis ante dictumst viverra tortor, maecenas taciti sed at nascetur eu fringilla.</p>
            </dxc-accordion>
          </dxc-accordion>
          <dxc-accordion (onClick)="onClick($event)" iconSrc="./love.svg" disabled="true" theme="dark" mode="basic" assistiveText="default disabled accordion" label="Main Header Label">
          </dxc-accordion>
          <dxc-accordion iconSrc="./twitter.svg" (onClick)="onClick($event)" theme="dark" mode="alternative" assistiveText="alternative accordion" label="Main Header Label">
            <p style="margin:0px">Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam dui cubilia sapien dignissim himenaeos, aliquam nec sociis ad et arcu. Neque ultricies senectus faucibus morbi urna lectus eleifend nibh, quisque malesuada vivamus pretium felis cursus aenean, laoreet elementum luctus massa viverra ullamcorper integer. Integer vestibulum enim cursus hendrerit proin pretium nam tempus congue, quam primis vehicula facilisi hac etiam gravida morbi magnis, felis per lectus praesent montes dapibus tellus habitasse. Vivamus eleifend elementum lacinia id leo ultrices per hendrerit, justo augue ullamcorper pellentesque felis ante dictumst viverra tortor, maecenas taciti sed at nascetur eu fringilla.</p>
          </dxc-accordion>
          <dxc-accordion (onClick)="onClick($event)" disabled="true" theme="dark" mode="alternative" assistiveText="alternative disabled accordion" label="Main Header Label">
          </dxc-accordion>
        </div>
      `,
      props: {
        onClick: action("Click fired!")
      }
    }),
    {
      notes: { markdown: accordionMD }
    }
  );

storiesOf("Form Components|Accordion", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcAccordionModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF', 'height': '400px'}" >
        <dxc-accordion [iconPosition]="iconPosition" [disabled]="disabled" [iconSrc]="mode === 'alternative' ? './twitter.svg' : './love.svg'" (onClick)="onClick" [theme]="theme" [mode]="mode" [assistiveText]="assistiveText" [label]="label">
          <dxc-accordion [disabled]="disabled" (onClick)="onClick" [theme]="theme" [mode]="mode" [assistiveText]="assistiveText" [label]="label">
            <p style="margin:0px">Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam dui cubilia sapien dignissim himenaeos, aliquam nec sociis ad et arcu. Neque ultricies senectus faucibus morbi urna lectus eleifend nibh, quisque malesuada vivamus pretium felis cursus aenean, laoreet elementum luctus massa viverra ullamcorper integer. Integer vestibulum enim cursus hendrerit proin pretium nam tempus congue, quam primis vehicula facilisi hac etiam gravida morbi magnis, felis per lectus praesent montes dapibus tellus habitasse. Vivamus eleifend elementum lacinia id leo ultrices per hendrerit, justo augue ullamcorper pellentesque felis ante dictumst viverra tortor, maecenas taciti sed at nascetur eu fringilla.</p>
          </dxc-accordion>
        </dxc-accordion>
      </div>`,
      props: {
        mode: select("Mode", { default: "default", alternative: "alternative" }, "default"),
        theme: select("Theme", { light: "light", dark: "dark" }, "light"),
        disabled: boolean("disabled", false),
        label: text("label", "Main Label"),
        assistiveText: text("assistiveText", "Assistive Text"),
        iconPosition: select(
          "iconPosition",
          { before: "before", after: "after" },
          "before"
        ),
        onClick: action("Click fired!"),
        
      }
    }),
    {
      notes: { markdown: accordionMD }
    }
  );
