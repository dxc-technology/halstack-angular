import {
  Component,
  HostBinding,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { SelectService } from "../services/select.service";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { Option } from "../interfaces/option.interface";

@Component({
  selector: "dxc-select-option-selected",
  templateUrl: "./dxc-select-option-selected.component.html",
})
export class DxcSelectOptionSelectedComponent implements OnInit {
  @HostBinding("class") className;

  @Input() multiple: boolean;

  subscriptor: any;
  selectedOptions: Array<Option> = [];

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
  });

  constructor(public service: SelectService) {
    this.subscriptor = this.service.selectedValues.subscribe((newOptions) => {
      if (newOptions) {
        if (Array.isArray(newOptions)) {
          this.selectedOptions = newOptions;
        } else {
          this.selectedOptions[0] = newOptions;
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  ngOnInit(): void {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  getDynamicStyle(inputs) {
    return css`
      display: block;
      max-width: 100%;
      .selectedOption {
        display: inline-flex;
      }
      div.labelsContainer {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
      }
    `;
  }

  ngOnDestroy() {
    if (this.subscriptor) {
      this.subscriptor.unsubscribe();
    }
  }
}
