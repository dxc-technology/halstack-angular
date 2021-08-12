import { Component, Inject, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit, HostListener, HostBinding, ChangeDetectorRef, OnDestroy, SimpleChanges } from '@angular/core';
import { ComplexThemeBindingStrategy } from '../theme/complexThemeBindingStrategy';
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: 'dxc-theme-palette',
  templateUrl: './dxc-theme-palette.component.html',
  styleUrls: ['./dxc-theme-palette.component.scss'],
  providers: [CssUtils, ComplexThemeBindingStrategy]
})

export class DxcThemePaletteComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('isThemeOpen') isThemeOpen: boolean = false;
  @Input('themeColors') themeColors: Array<any> = [];
  @Input('selectedThemeColor') selectedThemeColor: string = '';
  @Input('isDarkMode') isDarkMode: boolean = false;
  @Input('enablePopupMode') enablePopupMode: boolean = true;
  @Input('tabIndexValue') tabIndexValue: number = 0;
  @Input('showThemeToggle') showThemeToggle: boolean = true;
  @Input('label') label: string = '';
  @Input('switchLabel') switchLabel: string = '';
  @Input('themePaletteLabel') themePaletteLabel: string = '';
  @Input('closeLabel') closeLabel: string = '';
  @Input('colorShades') colorShades: Array<number> = [];
  @Input() border: boolean = false;
  @Input() public disabled: boolean = false;

  @Output() themeOpenChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() themeModeChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() themeColorChanged: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('dialogstart', { read: ElementRef, static: false }) dialogstart: ElementRef;
  @ViewChild('returntoend', { read: ElementRef, static: false }) returntoend: ElementRef;
  @ViewChild('dialogend', { read: ElementRef, static: false }) dialogend: ElementRef;

  @HostBinding("class") className;

  @HostListener('keydown.escape')
  escape() {
    if (this.enablePopupMode)
      this.closeThemePalette();
  }

  defaultInputs = new BehaviorSubject<any>({
    value: null,
    checked: false,
    disabled: false,
    required: false,
    label: null,
    name: null,
    id: null,
    margin: null,
    size: "fitContent",
    tabIndexValue: 0,
    border: false
  });

  sizes = {
    small: "42px",
    medium: "240px",
    large: "480px",
    fillParent: "100%",
  };

  constructor(private utils: CssUtils, private ref: ChangeDetectorRef, private complexThemeBindingStrategy: ComplexThemeBindingStrategy) { }

  ngOnInit(): void {
    let selectedThemeColor = this.themeColors.filter((colors) => { return colors.active == true; });
    this.selectedThemeColor = selectedThemeColor.length > 0 ? selectedThemeColor[0].color : '';
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    if (this.enablePopupMode) {
      setTimeout(() => {
        this.dialogstart.nativeElement.focus();
      }, 1);
    }
  }

  closeThemePalette() {
    this.themeOpenChanged.emit(!this.isThemeOpen);
  }

  themeChange(event) {
    this.isDarkMode = event;
    this.emitEvent(this.themeModeChanged);
  }

  changeThemeColor = (color) => {
    this.selectedThemeColor = color;
    this.emitEvent(this.themeColorChanged);
  }

  startKeyPress($event: any) {
    if (this.enablePopupMode) {
      if ($event.shiftKey && $event.keyCode == 9 && $event.srcElement == this.dialogstart.nativeElement) {
        if (this.returntoend.nativeElement.focus) {
          this.returntoend.nativeElement.tabindex = "0";
          this.returntoend.nativeElement.focus();
        }
      }
    }
  }

  endFocus($event: any) {
    if (this.enablePopupMode) {
      if (this.dialogstart.nativeElement.focus)
        this.dialogstart.nativeElement.focus();
    }
  }

  returnFocusOut($event: any) {
    if (this.enablePopupMode) {
      this.returntoend.nativeElement.tabindex = "-1";
    }
  }

  calculateWidth(inputs) {
    if (inputs.size === "fillParent") {
      return this.utils.calculateWidth(this.sizes, inputs);
    }
    return css`
      width: ${this.sizes[inputs.size]};
    `;
  }

  getDynamicStyle(inputs) {
    return css`
    ${this.border == true ? `div.theme-palette-border { border: 1px solid var(--theme-palette-borderColor);}` : ``}
    `;
  }

  emitEvent(eventToEmit) {
    let colorShadesList = [];
    this.colorShades.forEach((shadesPoint) => {
      colorShadesList.push(this.complexThemeBindingStrategy.setOpacity(this.selectedThemeColor, shadesPoint));
    });
    eventToEmit.emit({ 'color': this.selectedThemeColor, 'shades': colorShadesList, 'isDarkMode': this.isDarkMode });
  }
}
