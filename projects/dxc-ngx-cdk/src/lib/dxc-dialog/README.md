# DXC Dialog Component

## Overview

The DXC Dialog Component is a container that informs the user about a task or displays information.

## Usage

```html
<dxc-dialog
  [overlay]="false"
  [isCloseVisible]="true"
  [isVisible]="false"
  (onClose)="onClick($event)"
>
  Lorem ipsum dolor sit amet consectetur adipiscing elit curae, sodales.
</dxc-dialog>
```

Include the **DxcDialogModule** into **app.module.ts** to use the dialog component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcDialogModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcDialogModule],
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
  <tr>
    <td>@Input<br>isCloseVisible: boolean</td>
    <td>
      <code>true</code>
    </td>
    <td>If true, the close 'x' button will be visible.</td>
  </tr>
  <tr>
    <td>@Output<br>onCloseClick: EventEmitter</td>
    <td></td>
    <td>
      This function will be called when the user clicks the close 'x' button.
      The user has the responsibility of hidding the modal.
    </td>
  </tr>
  <tr>
    <td>@Output<br>onBackgroundClick: EventEmitter</td>
    <td></td>
    <td>
      This function will be called when the user clicks background of the modal
      button. The user has the responsibility of hidding the modal.
    </td>
  </tr>
  <tr>
    <td>@Input<br>overlay: boolean</td>
    <td>
      <code>true</code>
    </td>
    <td>If true, the dialog will be displayed over a darker background.</td>
  </tr>
  <tr>
    <td>@Input<br>padding: any (string | object)</td>
    <td></td>
    <td>
      Size of the padding to be applied to the component ('xxsmall' | 'xsmall' |
      'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an
      object with 'top', 'bottom', 'left' and 'right' properties in order to
      specify different padding sizes.
    </td>
  </tr>
  <tr>
    <td>@Input<br>tabIndexValue: number</td>
    <td><code>0</code></td>
    <td>
      Value of the tabindex given to the close 'x' button.
    </td>
  </tr>
</table>

## Theming

Not available tokens.
