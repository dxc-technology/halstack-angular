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
import { DxcButtonModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcCardModule],
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
    <td>@Input<br>imageSrc: string</td>
    <td></td>
    <td>URL of the image that will be placed in the card component.</td>
  </tr>
  <tr>
    <td>@Input<br>imageBgColor: string</td>
    <td><code>'black'</code></td>
    <td>Color of the image background.</td>
  </tr>
  <tr>
    <td>@Input<br>imagePadding: any (string | object)</td>
    <td></td>
    <td>
      Size of the padding to be applied to the image section of the
      component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' |
      'xlarge' | 'xxlarge'). You can pass an object with 'top', 'bottom',
      'left' and 'right' properties in order to specify different padding
      sizes.
    </td>
  </tr>
  <tr>
    <td>@Input<br>imagePosition: string ('after' | 'before')</td>
    <td>
      <code>'before'</code>
    </td>
    <td>Whether the image should appear in relation to the content.</td>
  </tr>
  <tr>
    <td>@Input<br>linkHref: string</td>
    <td></td>
    <td>
      If defined, the tag will be displayed as an anchor, using this prop as
      "href". Component will show some visual feedback on hover.
    </td>
  </tr>
  <tr>
    <td>@Output<br>onClick: EventEmitter</td>
    <td></td>
    <td>
      This function will be called when the user clicks the tag. Component
      will show some visual feedback on hover.
    </td>
  </tr>
  <tr>
    <td>@Input<br>imageCover: boolean</td>
    <td><code>false</code></td>
    <td>Whether the image must cover the whole image area of the card.</td>
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
    <td>@Input<br>tabIndexValue: number</td>
    <td><code>0</code></td>
    <td>
      Value of the tabindex given when there is an href.
    </td>
  </tr>
</table>

## Theming

Not available tokens.
