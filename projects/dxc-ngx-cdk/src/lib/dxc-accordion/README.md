# DXC Accordion Component

## Overview

The DXC Accordion Component is a collapsible panel.

## Usage

```html
<dxc-accordion
  label="Example label"
  iconPosition="before"
  (onClick)="accordionClicked()"
  padding="medium"
  margin="medium">
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.
  </div>
</dxc-accordion>
```

Include the **DxcAccordionModule** into **app.module.ts** to use the accordion component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcAccordionModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcAccordionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## API

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td></td>
        <td>Text to be placed next to the button.</td>
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed next to the button label.</td>
    </tr>
    <tr>
        <td>@Input<br>iconPosition: 'before' | 'after'</td>
        <td></td>
        <td>Whether the icon should appear after or before the label.</td>
    </tr>
    <tr>
        <td>@Input<br>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed on the right side of the panel.</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>@Input<br>isExpanded: boolean</td>
        <td><code>false</code></td>
        <td>If true, the component will be expanded.</td>
    </tr>
    <tr>
        <td>@Output<br>onClick: EventEmitter</td>
        <td></td>
        <td>This function will be called when the user clicks the icon to open/close the panel. 
            The state of the panel (opened/closed) should be passed as a parameter</td>
        </tr>
    <tr>
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>
            Size of the margin to be applied to the component ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
            can pass an object with 'top', 'bottom', 'left' and 'right' properties
            in order to specify different margin sizes.
        </td>
    </tr>
    <tr>
        <td>@Input<br>padding: any (string | object)</td>
        <td></td>
        <td>
            Size of the padding to be applied to the custom area ('xxsmall' | 
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You 
            can pass an object with 'top', 'bottom', 'left' and 'right' properties 
            in order to specify different padding sizes.
        </td>
    </tr>
</table>
