# DXC Accordion Group Component

## Overview

The DXC Accordion Group Component is a collapsible panel.

## Usage

```html
<dxc-accordion-group
  label="Example label"
  iconPosition="before"
  (onClick)="accordionClicked()"
  padding="medium"
  margin="medium"
>
  <dxc-accordion
    label="Example label 1"
    iconPosition="before"
    (onClick)="accordionClicked()"
    padding="medium"
    margin="medium"
  >
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </div>
  </dxc-accordion>
    <dxc-accordion
    label="Example label 2"
    iconPosition="before"
    (onClick)="accordionClicked()"
    padding="medium"
    margin="medium"
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
    </tr>
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>
            Size of the margin to be applied to the component ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
            can pass an object with 'top', 'bottom', 'left' and 'right' properties
            in order to specify different margin sizes.
        </td>
    </tr>
</table>

## Theming

Not available tokens.
