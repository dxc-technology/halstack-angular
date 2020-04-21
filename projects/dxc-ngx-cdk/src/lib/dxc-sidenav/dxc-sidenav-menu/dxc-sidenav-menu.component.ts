import {
  Component,
  Input,
  OnChanges,
  HostBinding,
  SimpleChange,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from "@angular/core";
import { MatTab } from "@angular/material";

@Component({
  selector: "dxc-sidenav-menu",
  templateUrl: "./dxc-sidenav-menu.component.html"
})
export class DxcSidenavMenuComponent implements OnChanges {

  constructor(  private cdRef: ChangeDetectorRef) {

  }

  public ngOnChanges(): void {
  }

  public ngAfterViewInit() {
  }

}
