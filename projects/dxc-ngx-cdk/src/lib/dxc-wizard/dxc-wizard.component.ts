import {
  Component,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-wizard",
  templateUrl: "./dxc-wizard.component.html",
  providers: [CssUtils],
})
export class DxcWizardComponent {
  @Input() mode: string;
  @Input() currentStep: number;
  @Input() margin: any;
  @Input() steps: Array<any>;
  @Output() onStepClick = new EventEmitter<any>();

  innerCurrentStep: number;

  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({
    mode: "horizontal",
    currentStep: 0,
    margin: null,
    steps: null,
  });

  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.innerCurrentStep = this.currentStep || 0;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public handleStepClick(i) {
    if (this.currentStep == null) {
      this.innerCurrentStep = i;
    }

    if (this.onStepClick) {
      this.onStepClick.emit(i);
    }
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      display: inline-flex;
      flex-direction: ${inputs.mode === "vertical" ? "column" : "row"};
      justify-content: center;
      ${inputs.mode === "vertical" ? "height: 500px" : "width: 100%"};
    `;
  }
}
