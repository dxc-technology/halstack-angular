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
  selector: "dxc-sidenav-content",
  templateUrl: "./dxc-sidenav-content.component.html"
})
export class DxcSidenavContentComponent implements OnChanges {

  constructor(private cdRef: ChangeDetectorRef) {
  }

  public ngOnChanges(): void {
  }

  public ngAfterViewInit() {
  }

}
