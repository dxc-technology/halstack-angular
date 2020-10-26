import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from "@angular/core";
import { MatTab } from "@angular/material/tabs";

@Component({
  selector: "dxc-tab",
  templateUrl: "./dxc-tab.component.html",
})
export class DxcTabComponent implements OnChanges {
  //Default values
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() disabled: boolean = false;
  @Input() id: number;
  @Output() onClick = new EventEmitter<any>();

  showDotIndicator: boolean = false;
  labelClass: string;
  @ViewChild(MatTab, { static: false })
  public matTab: MatTab;

  constructor(private cdRef: ChangeDetectorRef) {}

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

  public onClickHandler(): void {
    this.onClick.emit(this.id);
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
