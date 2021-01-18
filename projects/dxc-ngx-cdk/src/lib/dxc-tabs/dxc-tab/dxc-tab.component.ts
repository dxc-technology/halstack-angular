import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ContentChildren,
} from "@angular/core";
import { MatTab } from "@angular/material/tabs";
import { DxcTabIconComponent } from './dxc-tab-icon/dxc-tab-icon.component';
import { QueryList } from '@angular/core';

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
  @Output() onTabClick = new EventEmitter<any>();

  showDotIndicator: boolean = false;
  labelClass: string;
  @ViewChild(MatTab, { static: false })
  public matTab: MatTab;

  @ContentChildren(DxcTabIconComponent)
  dxcTabIcon: QueryList<DxcTabIconComponent>;

  tabIcon: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  public ngOnChanges(): void {
    this.getLabelClass();
    if (this.matTab) {
      this.matTab.disabled = this.disabled;
      this.cdRef.detectChanges();
    }
  }

  public ngAfterViewInit() {
    if(this.dxcTabIcon.length !== 0){
      this.iconSrc = "";
    }
    else{
       this.tabIcon = true;
       this.getLabelClass();
    }
    this.cdRef.detectChanges();
    this.matTab.disabled = this.disabled;
  }

  public onClickHandler(): void {
    this.onTabClick.emit(this.id);
  }

  getLabelClass() {
    if ((this.iconSrc || this.tabIcon) && this.label) {
      this.labelClass = "icon-text";
    } else if (!this.iconSrc && !this.tabIcon) {
      this.labelClass = "only-text";
    } else {
      this.labelClass = "only-icon";
    }
  }
}
