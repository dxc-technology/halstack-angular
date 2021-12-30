import {
  Component,
  HostBinding,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";

@Component({
  selector: "status-tag",
  templateUrl: "./status-tag.component.html",
})
export class StatusTagComponent implements OnInit {
  @HostBinding("class") className;

  @Input() status: string;

  defaultInputs = new BehaviorSubject<any>({
    status: null,
  });

  constructor() {}

  ngOnInit(): void {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      box-sizing: border-box;
      height: 24px;
      border: 1px solid
        ${inputs.status === "Ready"
          ? "#24A148"
          : inputs.status === "Deprecated"
          ? "#C59F07"
          : inputs.status === "Experimental"
          ? "#5F249F"
          : ""};
      border-radius: 0.5rem;
      padding: 4px 8px;
      font-size: 0.75rem;
      font-weight: 600;
      color: ${inputs.status === "Ready"
        ? "#135325"
        : inputs.status === "Deprecated"
        ? "#624F04"
        : inputs.status === "Experimental"
        ? "#321353"
        : ""};
      background-color: ${inputs.status === "Ready"
        ? "#F7FDF9"
        : inputs.status === "Deprecated"
        ? "#FFFDF5"
        : inputs.status === "Experimental"
        ? "#FAF7FD"
        : ""};
      display: flex;
      align-items: center;
    `;
  }
}
