# DXC Upload Component

## Overview

The DXC Upload Component is a component to upload files.

## Usage

```html

```

Include the **DxcUploadModule** into **app.module.ts** to use the upload component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcUploadModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcToggleModule],
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
        <td>@Output<br>onUpload: EventEmitter</td>
        <td></td>
        <td>This event will be called when the user clicks the 'Upload' button for every file to be uploaded, we will as a parameter the File object; apart from that this function should return one promise on which we should make 'then'(here we should show a Success alert) or 'catch' (in this case we would receive the error message as a string)</td>
    </tr>
</table>

## Examples

```html
```
