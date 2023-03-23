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
import { MatLegacyTab as MatTab } from "@angular/material/legacy-tabs";
import { DxcTabIconComponent } from "./dxc-tab-icon/dxc-tab-icon.component";
import { QueryList } from "@angular/core";
import { TabService } from "../services/tab.service";
@Component({
  selector: "dxc-tab",
  templateUrl: "./dxc-tab.component.html",
})
export class DxcTabComponent implements OnChanges {
  /**
   * Text to be placed within the tab.
   */
  @Input() label: string;

  /**
   * @deprecated The path of an icon to be placed within the tab.
   */
  @Input() iconSrc: string;

  /**
   * Whether the tab is disabled or not.
   */
  @Input() disabled: boolean = false;

  /**
   * It can have boolean type or number type.
   * If the value is 'true', an empty badge will appear. If it is 'false',
   * no badge will appear.
   * If a number is put it will be shown as the label of the notification
   * in the tab, taking into account that if that number is greater than 99,
   * it will appear as '+99' in the badge.
   */
  @Input() notificationNumber: boolean | number;

  /**
   * This event will emit when the user clicks on a tab. The index
   * of the clicked tab will be passed as a parameter.
   */
  @Output() onTabClick: EventEmitter<number> = new EventEmitter<number>();

  /**
   * This event will emit when the user is on hover on a tab.
   */
  @Output() onTabHover: EventEmitter<number> = new EventEmitter<number>();

  @Input() id: number;

  showDotIndicator: boolean = false;
  labelClass: string;
  @ViewChild(MatTab, { static: false })
  public matTab: MatTab;

  @ContentChildren(DxcTabIconComponent)
  dxcTabIcon: QueryList<DxcTabIconComponent>;

  tabIcon: boolean = false;

  iconPosition: string;

  notificationValue: any;

  constructor(private cdRef: ChangeDetectorRef, private service: TabService) {
    this.service.iconPosition.subscribe((value) => {
      if (value) {
        this.iconPosition = value;
        this.getLabelClass();
      }
    });
  }

  public ngOnInit(): void {
    this.notificationValue =
      typeof this.notificationNumber === "boolean"
        ? ""
        : this.notificationNumber;
  }

  public ngOnChanges(): void {
    this.getLabelClass();
    if (this.matTab) {
      this.matTab.disabled = this.disabled;
      this.cdRef.detectChanges();
    }
  }

  public ngAfterViewInit() {
    if (this.dxcTabIcon.length !== 0) {
      this.iconSrc = "";
      this.tabIcon = true;
    }
    this.getLabelClass();
    this.matTab.disabled = this.disabled;
    this.cdRef.detectChanges();
  }

  public onClickHandler(): void {
    if (!this.matTab.disabled) {
      this.onTabClick.emit(this.id);
    } else {
      this.matTab.isActive = false;
    }
  }

  public onHoverHandler(): void {
    this.onTabHover.emit();
  }

  getLabelClass() {
    if ((this.iconSrc || this.tabIcon) && this.label) {
      if (this.iconPosition === "top") {
        this.labelClass = "icon-top";
      } else {
        this.labelClass = "icon-left";
      }
    } else if (!this.iconSrc && !this.tabIcon) {
      this.labelClass = "only-text";
    } else {
      this.labelClass = "only-icon";
    }
  }
}
