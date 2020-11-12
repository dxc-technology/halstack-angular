# DXC Standard Layout Component

## Overview

The DXC Standard Layout Component is a container.

## Usage

```html
<dxc-standard>
    <dxc-header></dxc-header>
    <dxc-main>
      <dxc-button label="Button"></dxc-button>
    </dxc-main>
    <dxc-footer
        copyright="© DXC Technology 2019. All rights reserved."
        [bottomLinks]="bottom"
        [socialLinks]="social"
    ></dxc-footer>
</dxc-standard>
```

Include the **DxcStandardModule** into **app.module.ts** to use the standard layout component:

```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DxcStandardModule } from "@dxc-technology/halstack-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [DxcStandardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
