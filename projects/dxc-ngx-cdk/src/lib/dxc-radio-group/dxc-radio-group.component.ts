import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
  Optional,
  ElementRef,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { Option, RadioGroupProperties } from "./dxc-radio-group.types";
import { BackgroundProviderService } from "../background-provider/service/background-provider.service";
import { RadioGroupService } from "./services/radio-group.service";

@Component({
  selector: "dxc-radio-group",
  templateUrl: "./dxc-radio-group.component.html",
  providers: [CssUtils, RadioGroupService],
})
export class DxcRadioGroupComponent implements OnInit {
  @Input()
  label: string = "";

  @Input()
  helperText: string = "";

  @Input()
  name: string;

  @Input()
  value?: string;

  @Input()
  readOnly?: boolean = false;

  @Input()
  disabled?: boolean = false;

  @Input()
  optional?: boolean = false;

  @Input()
  optionalItemLabel?: string;

  @Input()
  defaultValue?: string;

  @Input()
  options: Option[];

  @Input()
  stacking: "row" | "column" = "column";

  @Input()
  tabIndex: number = 0;

  @Output()
  onChange: EventEmitter<string> = new EventEmitter<string>();

  // ref

  constructor(private utils: CssUtils, private service: RadioGroupService) {}

  ngOnInit(): void {
    const allOptions = [];
    allOptions.push(...this.options);

    if(this.optional && this.optionalItemLabel) {
      // add empty option to the begginning of the array
      allOptions.unshift({
        label: "None",
        value: "",
      });
    };

    this.service.allOptions.next(allOptions);
  }

  ngOnDestroy() {
    this.utils = null;
  }
}
