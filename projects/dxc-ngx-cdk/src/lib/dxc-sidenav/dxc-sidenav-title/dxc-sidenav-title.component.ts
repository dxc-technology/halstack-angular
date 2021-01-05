import {
  Component,
  ElementRef,
  OnInit,
} from "@angular/core";
import { CssUtils } from "../../utils";
@Component({
  selector: "dxc-sidenav-title",
  templateUrl: "./dxc-sidenav-title.component.html",
  providers: [CssUtils],
})
export class DxcSidenavTitleComponent implements OnInit {

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

}
