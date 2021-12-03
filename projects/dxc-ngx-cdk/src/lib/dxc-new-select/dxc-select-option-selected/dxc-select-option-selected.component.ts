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
  @Input() disabled: boolean;
  @Input() searchable: boolean;
  @Input() placeholder: string;

  subscriptor: any;
  selectedOptions: Array<Option> = [];

  defaultInputs = new BehaviorSubject<any>({
    multiple: false,
    disabled: false,
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
    this.setPlaceholder();
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
    this.setPlaceholder();
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
    })}`;
  }

  private setPlaceholder(){
    if(this.multiple){
      if(!this.placeholder) {
        this.placeholder = "Choose options";
      }
    } else {
      if(!this.placeholder) {
        this.placeholder = "Choose an option";
      }
    }
  }

  getDynamicStyle(inputs) {
    return css`
      display: flex;
      max-width: 100%;
      div.labelsContainer {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
        .selectedOption {
          text-align: left;
          display: inline-flex;
          align-items: center;
          font: normal normal normal 16px/22px Open Sans;
          letter-spacing: 0px;
          color: ${inputs.disabled ? "#999999" : "#000000"};
          .iconLabel{
            width: 24px;
            height: 24px;
            display: inline-flex;
            align-items: center;
          }
          .comma{
            margin-right: 4px;
          }
        }
        .notSelectedLabel {
          text-align: left;
          font: normal normal normal 16px/22px Open Sans;
          letter-spacing: 0px;
          color: ${inputs.disabled ? "#999999" : "#666666"};;
        }
      }
    `;
  }

  ngOnDestroy() {
    if (this.subscriptor) {
      this.subscriptor.unsubscribe();
    }
  }
}
