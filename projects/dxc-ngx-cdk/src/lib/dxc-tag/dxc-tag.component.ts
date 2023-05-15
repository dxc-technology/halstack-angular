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
import { css } from "@emotion/css";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ContentChildren, ChangeDetectorRef } from '@angular/core';
import { DxcTagIconComponent } from './dxc-tag-icon/dxc-tag-icon.component';

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
  @Input()
  get newWindow(): boolean {
    return this._newWindow;
  }
  set newWindow(value: boolean) {
    this._newWindow = coerceBooleanProperty(value);
  }
  private _newWindow;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;

  @Output() onClick = new EventEmitter<any>();

  isClickDefined = false;

  styleDxcTag: string;

  tagContent: string;

  iconContainer: string;

  shadowDepth: string;

  @ViewChildren("dxcBox", { read: ElementRef }) dxcBox: QueryList<ElementRef>;

  @ContentChildren(DxcTagIconComponent)
  dxcTagIcon: QueryList<DxcTagIconComponent>;

  styledLink: string = css`
    text-decoration: none;
    outline: none;
  `;

  styledButton: string = css`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: 0;
    font-family: inherit;
    font-family: var(--fontFamily);
  `;

  defaultInputs = new BehaviorSubject<any>({
    size: "fitContent",
    iconSrc: null,
    iconBgColor: "black",
    label: false,
    linkHref: null,
    labelPosition: "after",
    margin: null,
    newWindow: false,
    tabIndexValue: 0
  });
  constructor(private utils: CssUtils,private cdRef: ChangeDetectorRef) {}

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
    if(this.dxcTagIcon.length !== 0){
      this.iconSrc = "";
    }
    this.setStyleDxcBox();
    this.cdRef.detectChanges();
  }

  setStyleDxcBox() {
    this.dxcBox.toArray().forEach((el) => {
      (el.nativeElement as HTMLElement).style.border = "0px solid";
      if(!this.label && this.size == "small"){
        (el.nativeElement as HTMLElement).style.width = "48px"
      }
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
      height: 43px;
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
      dxc-tag-icon{
        img,svg{
          padding: 10px 12px;
          height: 23px;
        }
      }
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
