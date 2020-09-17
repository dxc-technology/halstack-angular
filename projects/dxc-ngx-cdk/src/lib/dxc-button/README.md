# DXC Button Component

## Overview

The DXC Button Component is a button which could have different style depending on its type.

## Usage

```html
<dxc-button
  type="basic"
  (click)="navigateToProfile()"
  text="Profile"
  icon="person"
  iconPosition="before"
>
</dxc-button>
```

Include the **DxcButtonModule** into **app.module.ts** to use the button component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcButtonModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcButtonModule],
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
        <td>@Input<br>mode: 'basic' | 'outlined' | 'raised' | 'flat'</td>
        <td><code>'basic'</code></td>
        <td>Uses on of the available button modes.</td>
    </tr>
    <tr>
        <td>@Input<br>label: string</td>
        <td><code>''</code></td>
        <td>Text to be placed next to the button.</td>
    </tr>
    <tr>
        <td>@Input<br>iconSrc: string</td>
        <td></td>
        <td>URL of the icon that will be placed next to the button label.</td>
    </tr>
    <tr>
        <td>@Input<br>iconPosition 'before' | 'after'</td>
        <td><code>'before'</code></td>
        <td>Whether the icon should appear after or before the label.</td>
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
        <td>This event will be triggered when the user clicks the radio. The new event will be passed as a parameter.</td>
    </tr>
</table>

## Examples

```html
<!-- Basic button with text, font-awesome icon and positioned before -->
<dxc-button
  (click)="showAllergies()"
  text="Basic"
  iconType="fa"
  icon="fas fa-allergies"
  iconPosition="before"
></dxc-button>

<!-- Basic button with text, disabled, font-awesome icon and positioned before -->
<dxc-button
  type="basic"
  disabled
  text="Back"
  iconType="fa"
  icon="fas fa-arrow-left"
  iconPosition="before"
>
</dxc-button>

<!-- Raised button with text, material icon and positioned after -->
<dxc-button
  type="raised"
  disableRipple
  text="Search"
  iconType="mat"
  icon="search"
></dxc-button>

<!-- Raised button with text, disabled, font-awesome icon and positioned before -->
<dxc-button
  type="raised"
  disabled
  text="Share"
  icon="fab fa-instagram"
  iconType="fa"
  iconPosition="before"
>
</dxc-button>

<!-- Outlined button with text, material icon and positioned after -->
<dxc-button type="outlined" text="Go to profile" icon="person"></dxc-button>

<!-- Outlined button with text, disabled, font-awesome icon and positioned after -->
<dxc-button
  type="outlined"
  disabled
  text="Save"
  iconType="fa"
  icon="fas fa-save"
></dxc-button>

<!-- Flat button with text, material icon and positioned after -->
<dxc-button
  type="flat"
  (click)="showAlert()"
  text="Warning"
  icon="warning"
></dxc-button>

<!-- Flat button with text, disabled, material icon and positioned before -->
<dxc-button
  type="flat"
  disabled
  text="Take a photo"
  icon="photo_camera"
  iconPosition="before"
></dxc-button>

<!-- Basic button without text, disabled, material icon and positioned before -->
<dxc-button
  type="flat"
  disabled
  icon="photo_camera"
  iconPosition="before"
></dxc-button>

<!-- Raised button with text and without icon -->
<dxc-button type="raised" text="Click me!"></dxc-button>
```
