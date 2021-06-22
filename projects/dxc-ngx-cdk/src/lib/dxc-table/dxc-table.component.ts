import { Component, Input, HostBinding, SimpleChanges } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-table",
  templateUrl: "./dxc-table.component.html",
  styleUrls: [],
  providers: [CssUtils],
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
      div#divTable {
        ${this.utils.getMargins(this.margin)}
        ${this.calculateWidth(this.margin)};
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 8px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: var(--table-scrollBarThumbColor);
          border-radius: 6px;
        }
        &::-webkit-scrollbar-track {
          background-color: var(--table-scrollBarTrackColor);
          border-radius: 6px;
        }
      }

      table {
        border-collapse: collapse;
        width: 100%;
        & tr {
          border-bottom: var(--table-rowSeparatorThickness)
            var(--table-rowSeparatorStyle) var(--table-rowSeparatorColor);
        }

        & td {
          background-color: var(--table-dataBackgroundColor);
          font-family: var(--table-dataFontFamily);
          font-size: var(--table-dataFontSize);
          font-style: var(--table-dataFontStyle);
          font-weight: var(--table-dataFontWeight);
          color: var(--table-dataFontColor);
          text-transform: var(--table-dataFontTextTransform);
          text-align: var(--table-dataTextAlign);
          line-height: var(--table-dataTextLineHeight);
          text-align: var(--table-dataTextAlign);
          padding: var(--table-dataPaddingTop) var(--table-dataPaddingRight)
            var(--table-dataPaddingBottom) var(--table-dataPaddingLeft);
        }

        & th {
          background-color: var(--table-headerBackgroundColor);
          font-family: var(--table-headerFontFamily);
          font-size: var(--table-headerFontSize);
          font-style: var(--table-headerFontStyle);
          font-weight: var(--table-headerFontWeight);
          color: var(--table-headerFontColor);
          text-transform: var(--table-headerFontTextTransform);
          text-align: var(--table-headerTextAlign);
          line-height: var(--table-headerTextLineHeight);
          padding: var(--table-headerPaddingTop) var(--table-headerPaddingRight)
            var(--table-headerPaddingBottom) var(--table-headerPaddingLeft);
        }

        & th:first-child {
          border-top-left-radius: var(--table-headerBorderRadius);
        }

        & th:last-of-type {
          border-top-right-radius: var(--table-headerBorderRadius);
        }
      }
    `;
  }

  private calculateWidth = (margin: any) => {
    return margin ?`width: calc(100% - ${this.utils.getMarginValue(margin, "left")} - ${this.utils.getMarginValue(
      margin,"right")})`: '';
  }

}
