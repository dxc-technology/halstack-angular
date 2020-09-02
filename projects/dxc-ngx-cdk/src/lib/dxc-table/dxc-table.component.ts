import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-table",
  templateUrl: "./dxc-table.component.html",
  styleUrls: [],
  providers: [CssUtils]
})
export class DxcTableComponent {
  @Input() margin;
  @HostBinding("class") className;

  defaultInputs = new BehaviorSubject<any>({});

  constructor(private utils: CssUtils) {}

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      div#divTable{
        ${this.utils.getMargins(inputs.margin)}
      }  

      table {
        border-collapse: collapse;
        width: 100%;
        & tr {
          border-bottom: 1px solid var(--table-separatorColor);
        }

        & td {
          background-color: var(--table-bodyBackgroundColor);
          color: var(--table-bodyFontColor);
          min-height: 48px;
        }

        & th {
          padding: 16px 20px 16px 40px;
          min-height: 60px;
        }

        & td {
          padding: 14px 20px 12px 40px;
        }

        & th {
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          background-color: var(--table-headerBackgroundColor);
          color: var(--table-headerFontColor);
        }

        & th:first-child {
          border-radius: 4px 0px 0px 0px;
        }

        & th:nth-child(3) {
          border-radius: 0px 4px 0px 0px;
        }

      }
    `;
  }
}
