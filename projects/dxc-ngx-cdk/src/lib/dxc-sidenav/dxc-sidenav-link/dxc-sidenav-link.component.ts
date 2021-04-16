import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { CssUtils } from "../../utils";
import { coerceNumberProperty } from '@angular/cdk/coercion';
@Component({
  selector: "dxc-sidenav-link",
  templateUrl: "./dxc-sidenav-link.component.html",
  providers: [CssUtils],
})
export class DxcSidenavLinkComponent implements OnInit {
  @Input() href: string;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  @Output() onClick = new EventEmitter<any>();

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

}
