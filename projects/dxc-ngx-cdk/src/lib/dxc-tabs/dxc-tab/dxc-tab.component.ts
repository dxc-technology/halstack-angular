import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  HostBinding,
  SimpleChange,
  ChangeDetectorRef
} from "@angular/core";
import { MatTab } from "@angular/material";

@Component({
  selector: "dxc-tab",
  templateUrl: "./dxc-tab.component.html"
})
export class DxcTabComponent implements OnChanges {
  //Default values
  @Input() label: string;
  @Input() theme: string = "light";
  @Input() iconSrc: string;
  @Input() disabled: boolean = false;

  showDotIndicator: boolean = false;
  labelClass: string;
  @ViewChild(MatTab, { static: false })
  public matTab: MatTab;

  constructor(  private cdRef: ChangeDetectorRef) {

  }

  public ngOnChanges(): void {
    this.getLabelClass();
    if (this.matTab) {
      this.matTab.disabled = this.disabled;
      this.cdRef.detectChanges();

    }
  }

  public ngAfterViewInit() {
    this.matTab.disabled = this.disabled;
  }

  getLabelClass() {
    if (this.iconSrc && this.label) {
      this.labelClass = "icon-text";
    } else if (!this.iconSrc) {
      this.labelClass = "only-text";
    } else {
      this.labelClass = "only-icon";
    }
  }
}
