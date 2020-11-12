import {
  Component,
  OnInit,
} from "@angular/core";
import { CssUtils } from "../../utils";
@Component({
  selector: "dxc-main",
  templateUrl: "./dxc-main.component.html",
  providers: [CssUtils],
})
export class DxcMainComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
