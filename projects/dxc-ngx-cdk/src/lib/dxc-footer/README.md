# DXC Footer Component

## Overview

The DXC Footer Component is a navegation container used at the bottom of the app.

## Usage

```html
<dxc-footer
      copyright="© DXC Technology 2019. All rights reserved."
      [bottomLinks]="bottomLinks"
      [socialLinks]="socialLinks"
      margin="medium">
</dxc-footer>
```

Include the **DxcFooterModule** into **app.module.ts** to use the footer component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcFooterModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcFooterModule],
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
        <td>@Input<br>logoSrc: string</td>
        <td></td>
        <td>The path of an icon to replace the default dxc logo.</td>
    </tr>
    <tr>
        <td>@Input<br>socialLinks: object[]</td>
        <td>
            <code>[]</code>
        </td>
        <td>
            An array of objects representing the links that will be rendered at
            the bottom part of the footer. Each object has the following
            properties:
            <ul>
            <li>
                <b>logoSrc</b>: The path of an icon for the link
            </li>
            <li>
                <b>href</b>: URL of the page the link goes to
            </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>@Input<br>bottomLinks: object[]</td>
        <td>
            <code>[]</code>
        </td>
        <td>
            An array of objects representing the incon links that will be rendered
            at the top-right side of the footer. Each object has the following
            properties:
            <ul>
            <li>
                <b>text</b>: Text for the link
            </li>
            <li>
                <b>href</b>: URL of the page the link goes to
            </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>@Input<br>copyright: string</td>
        <td></td>
        <td>The text that will be displayed as copyright disclaimer.</td>
    </tr>
    <tr>
        <td>@Input<br>children: node</td>
        <td></td>
        <td>
            The center section of the footer. Can be used to render custom content
            in this area.
        </td>
    </tr>
    <tr>
        <td>@Input<br>margin: any (string | object)</td>
        <td></td>
        <td>
            Size of the top margin to be applied to the footer ('xxsmall' |
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

## Theming
<table>
    <tr style="background-color: grey">
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>fontColor</td>
        <td><code>#FFFFFF</code></td>
        <td>Applies to token textColor.</td>
    </tr>
    <tr>
        <td>backgroundColor</td>
        <td><code>#000000</code></td>
        <td>Applies to token backgroundColor.</td>
    </tr>
    <tr>
        <td>lineColor</td>
        <td><code>#FFED00</code></td>
        <td>Applies to token lineColor.</td>
    </tr>
    <tr>
        <td>logo</td>
        <td>DXC Logo</td>
        <td>Applies to logo token.</td>
    </tr>
</table>