# DXC Accordion Group Component

## Overview

The DXC Accordion Group Component is a collapsible group panel.

## Usage

```html
<dxc-accordion-group
  [indexActive]="indexActive"
  (onActiveChange)="onActiveChange()"
  margin="medium"
>
  <dxc-accordion
    label="Example label 1"
    iconPosition="before"
    padding="medium"
  >
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </div>
  </dxc-accordion>
  <dxc-accordion
    label="Example label 2"
    iconPosition="before"
    padding="medium"
  >
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </div>
  </dxc-accordion>
</dxc-accordion-group>
```

Include the **DxcAccordionGroupModule** into **app.module.ts** to use the accordion group component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcAccordionGroupModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcAccordionGroupModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## API reference

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
<tr>
        <td><td>@Input<br>indexActive: number</td>
        <td></td>
        <td>The index of the active accordion. If undefined, the component will be uncontrolled and the active accordion will be managed internally by the component. If null, the component will be controlled and all accordions will be closed.</td>
      </tr>
      <tr>
          <td><td>@Input<br>disabled: boolean</td>
          <td><code>false</code></td>
          <td>If true, the component will be disabled.</td>
      </tr>
      <tr>
          <td><td>@Output<br>onActiveChange: function</td>
          <td></td>
          <td>This function will be called when the user clicks on an accordion. The index of the clicked accordion will be passed as a parameter.</td>
      </tr>
          <tr>
          <td><td>@Input<br>margin: string | object</td>
          <td></td>
          <td>Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.</td>
      </tr>
</table>

## Theming

Not available tokens.
