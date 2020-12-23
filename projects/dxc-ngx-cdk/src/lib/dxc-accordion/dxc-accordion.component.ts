import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewChild,
  OnChanges,
} from "@angular/core";
import { CssUtils } from "../utils";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { coerceBooleanProperty } from "@angular/cdk/coercion";

@Component({
  selector: "dxc-accordion",
  templateUrl: "./dxc-accordion.component.html",
  styleUrls: ["./dxc-accordion.component.scss"],
  providers: [CssUtils],
})
export class DxcAccordionComponent implements OnInit, OnChanges {
  @Input() mode: string;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() assistiveText: string;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  @Output() onClick = new EventEmitter<any>();
  @Input() margin: any;
  @Input() padding: any;
  @Input()
  get isExpanded(): boolean {
    return this._isExpanded;
  }
  set isExpanded(value: boolean) {
    this._isExpanded = coerceBooleanProperty(value);
  }
  private _isExpanded;

  @HostBinding("class") className;

  @ViewChild("matExpansionPanel", { static: true }) _matExpansionPanel: any;
  renderedIsExpanded: boolean;

  defaultInputs = new BehaviorSubject<any>({
    margin: null,
    padding: null,
    disabled: false,
  });

  constructor(private cssUtils: CssUtils) {}

  ngOnInit() {
    this.renderedIsExpanded = this.isExpanded || false;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.iconPosition !== "after") {
      this.iconPosition = "before";
    }
    this.renderedIsExpanded = this.isExpanded;
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public onClickHandler($event: any): void {
    if (!this.disabled) {
      this.onClick.emit(!this.renderedIsExpanded);
      if (this.isExpanded === undefined || this.isExpanded === null) {
        this.renderedIsExpanded = !this.renderedIsExpanded;
      }
    }
    this.renderedIsExpanded === true
      ? this._matExpansionPanel.open()
      : this._matExpansionPanel.close();
  }

  getDynamicStyle(inputs) {
    return css`
      cursor: ${inputs.disabled ? "not-allowed" : "pointer"};
      ${this.cssUtils.getMargins(inputs.margin)}
      div.mat-expansion-panel-content {
        div.mat-expansion-panel-body {
          display: flex;
          cursor: default;
          ${this.cssUtils.getPaddings(inputs.padding)}
        }
      }
    `;
  }
}
