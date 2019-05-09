# DXC Button Component

## Overview

The DXC Button Component is a button which could have different style depending on its type.

## Usage

To use the component, add the following selector to any template:

<table style="border-radius: 10px">
    <tr>
        <td style="background-color: black; color: white">Selector</td>
        <td>dxc-button</td>
    </tr>
</table>

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
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DxcButtonModule } from '@diaas/dxc-ngx-cdk';

@NgModule({
  declarations: [AppComponent],
  imports: [DxcButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

The component also may include a **material icon** or a **font awesome icon**. Check the following links to include any icon:

<table style="border-radius: 10px">
    <tr>
        <td style="background-color: #ffed00; color: black">Material</td>
        <td>https://material.io/icons/</td>
    </tr>
    <tr>
        <td style="background-color: #ffed00; color: black">Font Awesome</td>
        <td>https://fontawesome.com/icons</td>
    </tr>
</table>

To include any of these icons, add into **styles.scss** the DXC theme:

```scss
@import '~@diaas/dxc-ngx-cdk/styles/theme.scss';
```

## API

The API properties are the following:

<table>
    <tr style="background-color: grey">
        <td>Property</td>
        <td>Type</td>
        <td>Values</td>
        <td>Required</td>
        <td>Default</td>
    </tr>
    <tr>
        <td>type</td>
        <td><code>string</code></td>
        <td>{basic, outlined, raised, flat}</td>
        <td>No</td>
        <td>"basic"</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td><code>boolean | string</code></td>
        <td>-</td>
        <td>No</td>
        <td>false</td>
    </tr>
    <tr>
        <td>disableRipple</td>
        <td><code>boolean | string</code></td>
        <td>-</td>
        <td>No</td>
        <td>false</td>
    </tr>
    <tr>
        <td>text</td>
        <td><code>string</code></td>
        <td>-</td>
        <td>No</td>
        <td>""</td>
    </tr>
    <tr>
        <td>iconType</td>
        <td><code>string</code></td>
        <td>{mat, fa}</td>
        <td>No</td>
        <td>"mat"</td>
    </tr>
    <tr>
        <td>icon</td>
        <td><code>string</code></td>
        <td>Icon from 'iconType' API</td>
        <td>No</td>
        <td>""</td>
    </tr>
    <tr>
        <td>iconPosition</td>
        <td><code>string</code></td>
        <td>{before, after}</td>
        <td>No</td>
        <td>"after"</td>
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
