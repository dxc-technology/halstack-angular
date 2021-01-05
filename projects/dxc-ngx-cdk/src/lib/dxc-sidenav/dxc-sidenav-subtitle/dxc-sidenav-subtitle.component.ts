import {
  Component,
  ElementRef,
  OnInit,
} from "@angular/core";
import { CssUtils } from "../../utils";
@Component({
  selector: "dxc-sidenav-subtitle",
  templateUrl: "./dxc-sidenav-subtitle.component.html",
  providers: [CssUtils],
})
export class DxcSidenavSubtitleComponent implements OnInit {

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

}
