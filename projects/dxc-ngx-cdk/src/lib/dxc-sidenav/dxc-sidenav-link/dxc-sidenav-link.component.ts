import { coerceNumberProperty } from "@angular/cdk/coercion";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { CssUtils } from "../../utils";

@Component({
  selector: "dxc-sidenav-link",
  templateUrl: "./dxc-sidenav-link.component.html",
  providers: [CssUtils],
})
export class DxcSidenavLinkComponent implements OnInit {
  /**
   * Page to be opened when the user clicks on the link.
   */
  @Input() href: string;

  /**
   * This event will be emit when the user clicks the link.
   */
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Value of the tabindex given to the DxcSidenavLink.
   */
   @Input()
   get tabIndexValue(): number {
     return this._tabIndexValue;
   }
   set tabIndexValue(value: number) {
     this._tabIndexValue = coerceNumberProperty(value);
   }
   private _tabIndexValue;

  constructor(public element: ElementRef) {
  }

  ngOnInit() {
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

}
