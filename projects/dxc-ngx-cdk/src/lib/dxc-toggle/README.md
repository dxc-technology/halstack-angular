# DXC Toggle Component

## Overview

The DXC Toggle Component is an on/off toggle with the appearance of a button.

## Usage

```html
<dxc-toggle
  type="basic"
  (click)="selectOption()"
  label="Profile"
  >
</dxc-button>
```

Include the **DxcToggleModule** into **app.module.ts** to use the toggle component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcToggleModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcToggleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## API reference

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <td>Name</td>
        <td>Default</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>@Input<br>selected: boolean</td>
        <td>false</td>
        <td>If true, the component is selected.</td>
    </tr>
    <tr>
        <td>@Input<br>mode: 'basic' | 'outlined'</td>
        <td><code>'basic'</code></td>
        <td>Uses on of the available toggle modes.</td>
    </tr>
    <tr>
        <td>@Input<br>theme: 'light' |'dark'</td>
        <td><code>'light'</code></td>
        <td>Uses one of the available toggle themes.</td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td><code>''</code></td>
        <td>Text to be placed next to the toggle.</td>
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed on the toggle</td>
    </tr>
    <tr>
        <td>@Input<br>disabled: boolean</td>
        <td>false</td>
        <td>If true, the component will be disabled.</td>
    </tr>
    <tr>
        <td>@Input<br>disableRipple: boolean</td>
        <td>false</td>
        <td>If true, the ripple effect will be disabled.</td>
    </tr>
      <tr>
        <td>@Output<br>onClick: EventEmitter</td>
        <td></td>
        <td>This event will be triggered when the user clicks the button. The new state will be passed as a parameter.</td>
    </tr>
    <tr>
        <td>@Input<br>iconPosition: 'before'|'after'</td>
        <td><code>'before'</code></td>
        <td>Whether the icon should appear after or before the label.</td>
    </tr>
</table>

## Examples

```html
<dxc-toggle
  selected="true"
  theme="dark"
  mode="basic"
  iconSrc="/money.svg"
  (onClick)="onClick($event.source.checked)"
  label="Toggle"
></dxc-toggle>
```
