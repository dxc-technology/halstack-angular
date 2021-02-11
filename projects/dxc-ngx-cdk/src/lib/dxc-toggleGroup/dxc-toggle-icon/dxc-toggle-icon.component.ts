import {
    Component,
    HostBinding,
    OnChanges,
  } from "@angular/core";
  
  @Component({
    selector: "dxc-toggle-icon",
    templateUrl: "./dxc-toggle-icon.component.html",
  })
  export class DxcToggleIconComponent implements OnChanges {
  
    @HostBinding("class") classes = "icon";

    constructor() {}
  
    public ngOnChanges(): void {
      
    }
  
  }
  