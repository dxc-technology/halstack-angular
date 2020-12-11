# DXC Application Layout Component

## Overview

The DXC Application Layout Component is a container.

## Usage

```html
<dxc-application-layout>
    <dxc-header></dxc-header>
    <dxc-application-layout-main>
      <dxc-button label="Button"></dxc-button>
      <dxc-footer
        copyright="© DXC Technology 2019. All rights reserved."
        [bottomLinks]="bottom"
        [socialLinks]="social"
    ></dxc-footer>
    </dxc-application-layout-main>
</dxc-application-layout>
```

Include the **DxcApplicationLayoutModule** into **app.module.ts** to use the application layout component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcApplicationLayoutComponent } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcApplicationLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
