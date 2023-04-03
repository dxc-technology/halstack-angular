# DXC Tabbed Section Component

## Overview

The DXC Tabbed Section Component is a layout to organize content with tabs.

## Usage

```html
<dxc-tabbed-section [sections]="sections">
  <div id="section1-selector0" style="height: 200px;">Section 1</div>
  <div id="section2-selector1" style="height: 200px;">Section 2</div>
  <div id="section3-selector2" style="height: 200px;">Section 3</div>
</dxc-tabbed-section>
```

Include the **DxcTabbedSectionModule** into **app.module.ts** to use the tabbed section component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcTabbedSectionModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcTabbedSectionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## API reference

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>@Input<br>sections: object[]</td>
        <td><code>[]</code></td>
        <td>
          An array of objects representing the tabs/sections. Each of them has
          the following properties:
          <ul>
            <li>
              <b>tabLabel</b>: Tab label.
            </li>
            <li>
              <b>section</b>: Angular component for the section that will be
              linked to the tab. Each section will be rendered right bellow the
              previous one, and clicking in the tab will scroll the user to its associated
              section.
            </li>
          </ul>
        </td>
    </tr>
    <tr>
        <td>@Input<br>stickAtPx: number</td>
        <td><code>0</code></td>
        <td>The number of pixels from the top of the parent container, where the tabs will stick when scrolling.</td>
    </tr>
</table>

## Theming

Not available tokens.

## Usage Notes

The dxc-tabbed-section component is based on material desing tabbed component and styled using the emotion JS to CSS library. When nesting several material tabbed components you may find conflicts depending on how you decide to implememnt it. In case this happens, it is necesary to define a default style for each of this nested material-tab-group elements in order to avoid the dxc-tabbed-section style to apply to each of them. An Example of this style definition as follows:

```css
.mat-mdc-tab-group{
  z-index: 10;
  position: initial;
  top: unset;
}
```
