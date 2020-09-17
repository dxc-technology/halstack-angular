# DXC Accordion Component

## Overview

The DXC Accordion Component is a collapsible panel.

## Usage

```html
<dxc-accordion
  label="Example label"
  icon="person"
  iconPosition="before"
  assistiveText="Helper text"
  (click)="accordionOpened()"  
>
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
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
      <tr>
        <td>@Input<br>label: string</td>
        <td><code>''</code></td>
        <td>Panel label.</td>
    </tr>
    <tr>
        <td>@Input<br>mode: 'default' | 'alternative'</td>
        <td><code>'default'</code></td>
        <td>Uses one of the available modes.</td>
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed next to panel label.</td>
    </tr>
    <tr>
        <td>@Input<br>iconPosition 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>Whether the icon should appear after or before the label.</td>
    </tr>
    <tr>
        <td>@Input<br>assistiveText: string</td>
        <td></td>
        <td>Assistive text to be placed on the right side of the panel.</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td>false</td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>@Output<br>onClick: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the user clicks panel. The state of the panel(opened/closed) should be passed as a parameter.</td>
    </tr>
</table>
```