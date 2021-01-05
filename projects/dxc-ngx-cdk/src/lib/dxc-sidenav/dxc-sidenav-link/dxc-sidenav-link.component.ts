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
  @Input() href: string;
  @Output() onClick = new EventEmitter<any>();

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

}
