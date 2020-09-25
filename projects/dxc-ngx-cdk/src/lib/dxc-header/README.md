# DXC Header Component

## Overview

The DXC Header Component is a navegation container used at the top of the app.

## Usage

```html
<dxc-header margin="medium" padding="medium">
</dxc-header>
```

Include the **DxcHeaderModule** into **app.module.ts** to use the header component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcHeaderModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcHeaderModule],
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
        <td>@Input<br>logoSrc: string</td>
        <td>
            <code>'default'</code>
        </td>
        <td>The path of an icon to replace the default dxc logo.</td>
    </tr>
    <tr>
        <td>@Output<br>onClick: EventEmitter</td>
        <td></td>
        <td>
            This function will be called when the user clicks the header logo.
        </td>
    </tr>
    <tr>
        <td>@Input<br>children: node</td>
        <td></td>
        <td>
            The right section of the header. Can be used to render custom content
            in this area.
        </td>
    </tr>
    <tr>
        <td>@Input<br>margin: string</td>
        <td></td>
        <td>
            Size of the bottom margin to be applied to the footer ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
        </td>
    </tr>
    <tr>
        <td>@Input<br>padding: any (string | object)</td>
        <td></td>
        <td>
            Size of the padding to be applied to the custom area of the component
            ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
            'xxlarge'). You can pass an object with 'top', 'bottom', 'left' and
            'right' properties in order to specify different padding sizes.
        </td>
    </tr>
</table>
