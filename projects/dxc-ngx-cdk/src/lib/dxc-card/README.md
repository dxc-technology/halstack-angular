# DXC Card Component

## Overview

The DXC Card Component is a container which basically has an image and some content .

## Usage

```html
<dxc-card
  (onClick)="onClick($event)"
  [imagePosition]="'after'"
  [imageSrc]="person"
  [mode]="'default'"
>
  <span>Card Example</span>
</dxc-card>
```

Include the **DxcCardModule** into **app.module.ts** to use the card component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcButtonModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcCardModule],
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
        <td>@Input<br>imageSrc: string</td>
        <td></td>
        <td>URL of the image that will be placed inside the card.</td>
    </tr>
    <tr>
        <td>@Input<br>imagePosition 'after' | 'before' | 'above' | 'below'</td>
        <td><code>'before'</code></td>
        <td>Whether the image should appear in relation to the content.</td>
    </tr>
    <tr>
        <td>@Input<br>mode 'default' | 'alternative'</td>
        <td><code>'default'</code></td>
        <td>Uses on of the available card modes.</td>
    </tr>
</table>
