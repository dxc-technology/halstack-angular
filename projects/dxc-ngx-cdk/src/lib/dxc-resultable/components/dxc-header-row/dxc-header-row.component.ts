import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "th",
  template: `<div
    id="header-{{ columnName }}-{{ parentClassName }}"
    [ngClass]="[isSortable ? 'isSortable' : '']"
    [tabIndex]="isSortable ? tabIndexValue : -1"
  >
    {{ columnName }}
    <span
      id="iconSort-{{ columnName }}-{{ parentClassName }}"
      *ngIf="isSortable"
    ></span>
  </div>`,
  styleUrls: ["./dxc-header-row-component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class DxcHeaderRowComponent {
  columnName: string;
  isSortable: boolean;
  tabIndexValue: number;

  defaultSort: string;
  ascSort: string;
  descSort: string;

  state: string;
  parentClassName: any;
  propertyName: string;

  constructor(public elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.setSortIcon();
  }

  /** Paint icon for sorting depending on header state (up for asc, down for desc and default) */
  setSortIcon() {
    if (this.isSortable) {
      let divHeader = this.elementRef.nativeElement;
      let spanIcon = (divHeader as HTMLElement).getElementsByTagName("span")[0];
      switch (this.state) {
        case "up":
          let up = this.getAscIcon(this.columnName);
          spanIcon.insertAdjacentHTML("beforeend", up);
          divHeader.setAttribute("state", this.state);
          break;
        case "down":
          let down = this.getDescIcon(this.columnName);
          spanIcon.insertAdjacentHTML("beforeend", down);
          divHeader.setAttribute("state", this.state);
          break;
        default:
          let defaultIcon = this.getDefaultIcon(this.columnName);
          spanIcon.insertAdjacentHTML("beforeend", defaultIcon);
          divHeader.setAttribute("state", this.state);
          break;
      }
    }
  }

  /** Return default icon for the given header. */
  private getDefaultIcon(columnName: string) {
    return `<svg id="icon_default-${columnName}" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>`;
  }

  /** Return asc icon for the given header. */
  private getAscIcon(columnName: string) {
    return `<svg id="icon_asc-${columnName}" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`;
  }

  /** Return desc icon for the given header. */
  private getDescIcon(columnName: string) {
    return `<svg id="icon_desc-${columnName}" class="iconHeader" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;
  }
}
