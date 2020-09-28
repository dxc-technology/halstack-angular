# DXC Alert Component

## Overview

The DXC Alert Component is an important message for the user.

## Usage

```html
<dxc-alert
  type="confirm"
  mode="inline"
  inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  margin="medium">
</dxc-alert>
```

Include the **DxcAlertModule** into **app.module.ts** to use the alert component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcAlertModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcAlertModule],
  providers: [],
  bootstrap: [AppComponent]
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
    <tr>
        <td>@Input<br>type: string ('info' | 'confirm' | 'warning' | 'error')</td>
        <td>
        <code>'info'</code>
        </td>
        <td>Uses on of the available alert types.</td>
    </tr>
    <tr>
        <td>@Input<br>mode: string ('inline' | 'modal')</td>
        <td>
        <code>'inline'</code>
        </td>
        <td>
        Uses on of the available alert modes:
        <ul>
            <li>
            <strong>inline:</strong> If onClose function is received, close
            button will be visible and the function will be executed when it's
            clicked. There is no overlay layer. Position should be decided by
            the user.
            </li>
            <li>
            <strong>modal:</strong> The alert will be displayed in the middle
            of the screen with an overlay layer behind. The onClose function
            will be executed when the X button or the overlay is clicked. The
            user has the responsibility of hidding the modal in the onClose
            function, otherwise the modal will remain visible.
            </li>
        </ul>
        </td>
    </tr>
    <tr>
        <td>@Input<br>inlineText: string</td>
        <td></td>
        <td>Text to display after icon and alert type and before content.</td>
    </tr>
    <tr>
        <td>@Output<br>onClose: EventEmitter</td>
        <td></td>
        <td>
        This function will be called when the user clicks the close button. If
        there is no function we should close the alert by default.
        </td>
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
        <td>@Input<br>size: any (string | object)</td>
        <td>
        <code>'fitContent'</code>
        </td>
        <td>Size of the component ('large' | 'fillParent' | 'fitContent').</td>
    </tr>
</table>

## Theming
Not available tokens.