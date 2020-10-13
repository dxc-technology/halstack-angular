import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ElementRef,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { css } from "emotion";

@Component({
  selector: "dxc-tag",
  templateUrl: "./dxc-tag.component.html",
  styleUrls: ["./dxc-tag.component.css"],
  providers: [CssUtils],
})
export class DxcTagComponent implements OnInit {
  isHovered = false;

  @Input() size: string;

  @Input() iconSrc: string;
  @Input() iconBgColor: string;
  @Input() label: string;
  @Input() labelPosition: string;
  @Input() linkHref: string;
  @Input() margin: any;

  @Output() onClick = new EventEmitter<any>();

  isClickDefined = false;

  styleDxcTag: string;

  tagContent: string;

  iconContainer: string;

  shadowDepth: string;

  @ViewChildren("dxcBox", { read: ElementRef }) dxcBox: QueryList<ElementRef>;

  styledLink: string = css`
    text-decoration: none;
  `;

  defaultInputs = new BehaviorSubject<any>({
    size: "fitContent",
    iconSrc: null,
    iconBgColor: "black",
    label: false,
    linkHref: null,
    labelPosition: "after",
    margin: null,
  });
  constructor(private utils: CssUtils) {}

  ngOnInit() {
    this.isClickDefined = this.onClick.observers.length > 0;
    this.styleDxcTag = `${this.setDxcTagDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    this.tagContent = `${this.setTagContentDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    this.iconContainer = `${this.setIconContainerDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    this.shadowDepth = this.getShadowDepth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.styleDxcTag = `${this.setDxcTagDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    this.tagContent = `${this.setTagContentDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    this.iconContainer = `${this.setIconContainerDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    this.shadowDepth = this.getShadowDepth();
  }

  ngAfterViewInit() {
    this.setStyleDxcBox();
  }

  setStyleDxcBox() {
    this.dxcBox.toArray().forEach((el) => {
      (el.nativeElement as HTMLElement).style.border = "0px solid";
    });
  }

  mouseEnter() {
    this.isHovered = true;
    this.shadowDepth = this.getShadowDepth();
  }

  mouseLeave() {
    this.isHovered = false;
    this.shadowDepth = this.getShadowDepth();
  }

  sizes = {
    small: "42px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
    fitContent: "unset",
  };

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

  getShadowDepth(): string {
    return this.isHovered &&
      (this.isClickDefined ||
        (this.linkHref !== null && this.linkHref !== undefined))
      ? "2"
      : "1";
  }

  setDxcTagDynamicStyle(input: any) {
    return css`
      display: inline-flex;
      ${this.isClickDefined ||
      (this.linkHref !== null && this.linkHref !== undefined)
        ? css`
            cursor: pointer;
          `
        : css`
            cursor: unset;
          `};
      ${this.utils.getMargins(input.margin)};
    `;
  }

  setTagContentDynamicStyle(input: any) {
    return css`
      display: inline-flex;
      align-items: center;
      background-color: var(--tag-backgroundColor);
      ${this.utils.calculateWidth(this.sizes, input)};
      ${input.labelPosition &&
      input.labelPosition != null &&
      input.labelPosition === "before"
        ? css`
            flex-direction: row-reverse;
          `
        : css`
            flex-direction: row;
          `};
    `;
  }

  setIconContainerDynamicStyle(input: any) {
    return css`
      display: inline-flex;
      width: 48px;
      justify-content: center;
      ${input.iconBgColor
        ? css`
            background: ${input.iconBgColor};
          `
        : css`
            background: black;
          `}
    `;
  }

  tagLabel: string = css`
    padding: 0px 30px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: black;
    flex-grow: 1;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;
}
