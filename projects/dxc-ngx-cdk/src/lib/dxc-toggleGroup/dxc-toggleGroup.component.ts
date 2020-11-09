import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { css } from "emotion";

@Component({
  selector: "dxc-toggleGroup",
  templateUrl: "./dxc-toggleGroup.component.html",
  styleUrls: ["./dxc-toggleGroup.component.scss"],
  providers: [CssUtils],
})
export class DxcToggleGroupComponent implements OnInit {

  styledDxcToggleGroup: string;

  @Input() public options: {
    label?: string;
    iconSrc?: string;
  }[];

  defaultInputs = new BehaviorSubject<any>({
    
  });
  constructor(private utils: CssUtils) {}

  ngOnInit(){
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.styledDxcToggleGroup = `${this.setDxcToggleGroupDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  setDxcToggleGroupDynamicStyle(input: any) {
    return css`

    `;
  }

}
