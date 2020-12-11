import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from "@angular/core";
import { DxcFooterComponent } from "../../dxc-footer/dxc-footer.component";
import { CssUtils } from "../../utils";
import { DxcApplicationLayoutFooterComponent } from "../dxc-application-layout-footer/dxc-application-layout-footer.component";

@Component({
  selector: "dxc-application-layout-main",
  templateUrl: "./dxc-application-layout-main.component.html",
  providers: [CssUtils],
})
export class DxcApplicationLayoutMainComponent implements OnInit {
  @ContentChildren(DxcFooterComponent)
  dxcFooter: QueryList<DxcFooterComponent>;

  @ContentChildren(DxcApplicationLayoutFooterComponent)
  dxcCustomFooter: QueryList<DxcApplicationLayoutFooterComponent>;

  customFooter;
  defaultFooter = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    if (this.dxcFooter.length === 0 && this.dxcCustomFooter.length !== 0) {
      this.customFooter = "customFooter";
    } else if (this.dxcFooter.length === 1) {
      this.customFooter = "customDxcFooter";
    } else if (
      this.dxcFooter.length === 0 &&
      this.dxcCustomFooter.length === 0
    ) {
      this.defaultFooter = true;
    }
    this.cdRef.detectChanges();
  }
}
