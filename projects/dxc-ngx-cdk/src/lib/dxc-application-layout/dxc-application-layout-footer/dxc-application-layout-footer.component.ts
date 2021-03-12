import {
  Component,
  ElementRef,
  OnInit,
} from "@angular/core";
import { CssUtils } from "../../utils";
@Component({
  selector: "dxc-application-layout-footer",
  templateUrl: "./dxc-application-layout-footer.component.html",
  providers: [CssUtils],
})
export class DxcApplicationLayoutFooterComponent implements OnInit {

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

}
