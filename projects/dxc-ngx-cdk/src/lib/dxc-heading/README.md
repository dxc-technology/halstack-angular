# DXC Heading Component

## Overview

The DXC Header Component is a navegation container used at the top of the app.

## Usage

```html
<dxc-heading 
    text="Title for main section" 
    [level]="1">
</dxc-heading>
```

Include the **DxcHeadingModule** into **app.module.ts** to use the heading component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcHeadingModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcHeadingModule],
  providers: [],
  bootstrap: [AppComponent]
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
        <td>@Input<br>level: number</td>
        <td>
            <code>1</code>
        </td>
        <td>Defines the heading level from 1 to 5.</td>
    </tr>
    <tr>
        <td>@Input<br>text: string</td>
        <td></td>
        <td>Heading text.</td>
    </tr>
    <tr>
        <td>@Input<br>weight: 'light' | 'normal' | 'bold'</td>
        <td></td>
        <td>Modifies the default weight of the heading.</td>
    </tr>
    <tr>
        <td>@Input<br>margin: string | object</td>
        <td></td>
        <td>
        Size of the margin to be applied to the component ('xxsmall' | 'xsmall' |
        'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an
        object with 'top', 'bottom', 'left' and 'right' properties in order to
        specify different margin sizes.
        </td>
    </tr>
</table>
