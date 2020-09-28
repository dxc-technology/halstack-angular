# DXC Upload Component

## Overview

The DXC Upload Component is a component to upload files.

## Usage

```html
<dxc-upload 
  [uploadCallback]="fileUpload" 
  margin="xlarge">
</dxc-upload>
```

Include the **DxcUploadModule** into **app.module.ts** to use the upload component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcUploadModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcUploadModule],
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
      <td>@Output<br>uploadCallback: EventEmitter</td>
      <td></td>
      <td>
        This function will be called when the user clicks the 'Upload' button for
        every file to be uploaded, we will as a parameter the File object; apart
        from that this function should return one promise on which we should make
        'then'(here we should show a Success alert) or 'catch' (in this case we
        would receive the error message as a string)
      </td>
    </tr>
    <tr>
      <td>@Input<br>margin: any (string | object)</td>
      <td></td>
      <td>
          Size of the margin to be applied to the component ('xxsmall' | 
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You 
          can pass an object with 'top', 'bottom', 'left' and 'right' properties 
          in order to specify different padding sizes.
      </td>
    </tr>
</table>

## Theming

Not available tokens.