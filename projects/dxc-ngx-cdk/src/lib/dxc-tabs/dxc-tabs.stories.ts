import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import tabsMD from "./README.md";
import { boolean, select, text } from "@storybook/addon-knobs";
import "hammerjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { DxcTabsModule } from "./dxc-tabs.module";

const sliderValue = 10;
storiesOf("Form Components|Tabs", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcTabsModule, BrowserModule, BrowserAnimationsModule]
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
      <div  style="
      width: calc(100% - 380px); 
      margin-right: 200px;
      padding: 20px;
      margin-left: 45px;">
      <dxc-tabs [showDotIndicator]= "true">
        <dxc-tab [label]="'Tab 1'">Content A</dxc-tab>
        <dxc-tab [label]="'Tab with icon'" [iconSrc]="iconSrc">Content B</dxc-tab>
        <dxc-tab [label]="'Tab 3 Disabled'" [disabled]="true">Content C</dxc-tab>
      </dxc-tabs>
        
      <dxc-tabs [mode]="'underlined'">
      <dxc-tab [label]="'Tab 1'"><p style="color: white;"> Content A</p></dxc-tab>
      <dxc-tab [label]="'Tab 2'"><div style="color: white;">Content B </div></dxc-tab>
      <dxc-tab [label]="'Tab 3 Disabled'" [disabled]="true"><div style="color: white;">Content C</div></dxc-tab>
    </dxc-tabs>
        
    <h3 style="display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;"
    >Dark</h3>
    <div style="background:black;"> 
    <dxc-tabs [theme]="'dark'">
    <dxc-tab [label]="'Tab 1'" >Content A</dxc-tab>
    <dxc-tab [label]="'Tab with icon'" [iconSrc]="iconSrcWhite">Content B</dxc-tab>
    <dxc-tab [label]="'Tab 3 Disabled'" [disabled]="true">Content C</dxc-tab>
  </dxc-tabs>
    

   </div>
    </div>
      `,
      props: {
        iconSrc: text("iconSrc", "./love.svg"),
        iconSrcWhite: text("iconSrcWhite", "./hearth-2.svg")

      }
    }),
    {
      notes: { markdown: tabsMD }
    }
  );

storiesOf("Form Components|Tabs", module)
  .addDecorator(
    moduleMetadata({
      imports: [DxcTabsModule, BrowserModule, BrowserAnimationsModule]
    })
  )
  .add(
    "Knobs example",
    () => ({
      template: `<div [ngStyle]= "{'background':theme==='dark' ? 'black' : '#FFFFFF'}" >

      <dxc-tabs [theme] ="theme" 
                  [showDotIndicator]="showDotIndicator"
                  [mode] ="mode"
                  (activeTabIndexChange) ="activeTabIndexChange($event)">
          <dxc-tab [label]="label" [iconSrc]="iconSrc">Content A</dxc-tab>
          <dxc-tab [label]="'Disabled Tab 2'" [disabled]="disabled">Content B</dxc-tab>
      
      </dxc-tabs>
                     </div>
                        `,
      props: {
        disabled: boolean("Dsiable Tab 2", false),
        label: text("label", "Fav"),
        iconSrc: text("iconSrc", "./love.svg"),
        showDotIndicator: boolean("showDotIndicator", true),
        mode: select(
          "mode",
          { filled: "filled", underlined: "underlined" },
          "filled"
        ),
        theme: select("theme", { light: "light", dark: "dark" }, "light")
      }
    }),
    {
      notes: { markdown: tabsMD }
    }
  );
