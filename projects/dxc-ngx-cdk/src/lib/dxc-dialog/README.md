# DXC Dialog Component

## Overview

The DXC Dialog Component is a collapsible panel.

## Usage

```html
<dxc-dialog
  [overlay]="false"
  [isCloseVisible]="true"
  [isVisible]="false"
  (onClose)="onClick($event)"
>
  Lorem ipsum dolor sit amet consectetur adipiscing elit curae, sodales ac
  sapien consequat augue vitae id suscipit rhoncus, nunc auctor nisl faucibus
  mattis dapibus sociis. Senectus sociis viverra laoreet ligula habitant nullam
  potenti lectus tortor sodales, vulputate semper erat mauris fringilla natoque
  diam praesent scelerisque eget, mattis facilisi dapibus nibh interdum donec
  condimentum venenatis sollicitudin. Sociosqu taciti class diam placerat
  aliquam imperdiet tempus, metus natoque euismod convallis dictum ac dapibus
  suscipit, a molestie pulvinar gravida viverra faucibus. Dis ad quis tincidunt
  facilisi neque nunc, ligula odio rhoncus non nibh elementum, massa lacinia
  mollis inceptos molestie.
</dxc-dialog>
```

Include the **DxcDialogModule** into **app.module.ts** to use the dialog component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcDialogModule } from "@diaas/dxc-ngx-cdk";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Props

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>@Input<br>isVisible: boolean</td>
        <td>true</td>
        <td>If true, the modal should be visible</td>
    </tr>
    <tr>
        <td>@Input<br>isCloseVisible: boolean</td>
        <td>true</td>
        <td>If true, the close button should be visible</td>
    </tr>
    <tr>
        <td>@Output<br>onClose: function</td>
        <td></td>
        <td>This event will be triggered when the user clicks the close button. If there is no function we should close the modal by default</td>
    </tr>
    <tr>
        <td>@Input<br>overlay: boolean</td>
        <td>true</td>
        <td>If true, the modal will be over a darker background</td>
    </tr>
    
</table>

```

```
