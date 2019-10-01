# DXC Footer Component

## Overview

The DXC Footer Component is a collapsible panel.

## Usage

```html
<dxc-footer
  [socialLinks]="social"
  [bottomLinks]="bottom"
  [copyright]="'© DXC Technology 2019. All rights reserved.'"
>
</dxc-footer>
```

Include the **DxcFooterModule** into **app.module.ts** to use the footer component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcFooterModule } from "@diaas/dxc-ngx-cdk";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcFooterModule],
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
        <td>@Input<br>logoSrc: string</td>
        <td></td>
        <td>The path of an icon to replace the default dxc logo.</td>
    </tr>
    <tr>
        <td>@Input<br>socialLinks: object[]</td>
        <td><code>[]</code></td>
        <td>An array of objects representing the links that will be rendered at the bottom part of the footer. Each object has the following properties:
            <ul>
                <li><b>logoSrc</b>: The path of an icon for the link</li>
                <li><b>href</b>: URL of the page the link goes to</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>@Input<br>bottomLinks: object[]</td>
        <td><code>[]</code></td>
        <td>An array of objects representing the incon links that will be rendered at the top-right side of the footer. Each object has the following properties:
            <ul>
                <li><b>text</b>: Text for the link</li>
                <li><b>href</b>: URL of the page the link goes to</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>@Input<br>copyright: string</td>
        <td></td>
        <td>The text that will be displayed as copyright disclaimer.</td>
    </tr>
</table>
