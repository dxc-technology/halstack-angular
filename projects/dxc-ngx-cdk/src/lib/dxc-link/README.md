# DXC Link Component

## Overview

The DXC Link Component is a clickable text with a route.

## Usage

```html
This is a text with a <dxc-link href="#" text="Link"></dxc-link> to another
page.
```

Include the **DxcLinkModule** into **app.module.ts** to use the link component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcLinkModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcLinkModule],
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
        <td>@Input<br>underlined: boolean</td>
        <td>
            <code>true</code>
        </td>
        <td>
            Deprecated. If true, the text is underlined.
        </td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td>
            <code>false</code>
        </td>
        <td>
            If true, the link is disabled.
        </td>
    </tr>
    <tr>
        <td>@Input<br>inheritColor: boolean</td>
        <td>
            <code>false</code>
        </td>
        <td>If true, the color is inherited from parent.</td>
    </tr>
    <tr>
        <td>@Input<br>text: string</td>
        <td></td>
        <td>
            Link text.
        </td>
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>
            Source of the icon.
        </td>
    </tr>
    <tr>
        <td>@Input<br>iconPosition: 'before' | 'after'</td>
        <td>
            <code>'before'</code>
        </td>
        <td>
            Indicates the position of the icon in the component.
        </td>
    </tr>
    <tr>
        <td>@Input<br>href: string</td>
        <td></td>
        <td>
            Page to be opened when the user clicks on the link.
        </td>
    </tr>
    <tr>
        <td>@Input<br>newWindow: boolean</td>
        <td>
            <code>false</code>
        </td>
        <td>
            If true, the page is opened in a new browser tab.
        </td>
    </tr>
    <tr>
        <td>@Input<br>margin: string | object</td>
        <td>
            <code>false</code>
        </td>
        <td>
            Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). 
            You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
        </td>
    </tr>
    <tr>
      <td>@Input<br>tabIndexValue: number</td>
      <td><code>0</code></td>
      <td>
        Value of the tabindex.
      </td>
    </tr>
    <tr>
        <td>@Output<br>onClick: EventEmitter</td>
        <td></td>
        <td>This function will be called when the user clicks the link.</td>
    </tr>
</table>

## Theming

Not available tokens.
