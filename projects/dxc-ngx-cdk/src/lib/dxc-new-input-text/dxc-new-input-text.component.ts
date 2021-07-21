import { coerceBooleanProperty } from "@angular/cdk/coercion";
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { DxcNewInputTextService } from "./services/dxc-new-input-text.service";
import { OnDestroy } from "@angular/core";
import { DxcNewInputTextHelper } from "./dxc-new-input-text.helper";

@Component({
  selector: "dxc-new-input-text",
  templateUrl: "./dxc-new-input-text.component.html",
  providers: [DxcNewInputTextService, DxcNewInputTextHelper],
})
export class DxcNewInputTextComponent implements OnInit, OnChanges, OnDestroy {
  @HostBinding("class") className;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string;

  @Input()
  helperText: string;

  hasAction = () => this.onActionClick.observers.length;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  prefix = "";

  @Input()
  suffix = "";

  @Input()
  optional = false;

  @Input()
  clearable = false;

  @Input()
  error = "";

  @Input()
  placeholder = "";

  @Input()
  margin: Object | string;

  @Input()
  autocompleteOptions: Array<any> = [];

  random: string;
  autoSuggestId: string;

  private controlled: boolean;

  debouncedFocusOut;

  defaultInputs = new BehaviorSubject<any>({
    placeholder: "",
    error: "",
    clearable: false,
    optional: false,
    suffix: "",
    prefix: "",
    disabled: false,
    helperText: "",
    value: undefined,
    name: "",
    label: "",
    margin: "",
    autocompleteOptions: [],
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onActionClick = new EventEmitter<any>();

  @ViewChild("inputRef", { static: false }) inputRef: ElementRef;
  @ViewChild("autoSuggestOptions", { static: false }) optionsRef: ElementRef;

  size: string;

  tabIndex: number;

  autosuggestVisible: boolean = false;

  selectedOption: number;

  constructor(
    private utils: CssUtils,
    private cdRef: ChangeDetectorRef,
    private service: DxcNewInputTextService,
    private helper: DxcNewInputTextHelper
  ) {
    this.debouncedFocusOut = this.helper.debounced(
      () => this.handleOnFocusOut(),
      200
    );
  }
  ngOnDestroy(): void {
    this.debouncedFocusOut.unsubscribe();
  }

  ngOnInit(): void {
    this.random = `input-${Math.floor(Math.random() * 1000000000000000) + 1}`;
    this.autoSuggestId = this.random + "-listBox";
    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
    if (this.value === undefined) {
      this.value = "";
      this.controlled = false;
    } else {
      this.controlled = true;
    }
    this.service.setOptionsLength(this.autocompleteOptions.length);
    this.service.onFocused.subscribe((value) => {
      this.selectedOption = value;
      if (
        this.optionsRef &&
        this.optionsRef.nativeElement.children[this.selectedOption]
      ) {
        this.optionsRef.nativeElement.children[
          this.selectedOption
        ].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.service.setOptionsLength(this.autocompleteOptions.length);
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  handleOnChange(event) {
    this.onChange.emit(event.target.value);
    if (this.controlled) {
      console.log("controlled cambios");
      event.target.value = this.value;
      this.cdRef.detectChanges();
    }
  }

  handleDefaultClearAction() {
    this.onChange.emit("");
    if (!this.controlled) {
      this.value = "";
      this.inputRef.nativeElement.value = this.value;
      this.cdRef.detectChanges();
    }
  }

  handleActionOnClick(event) {
    this.onActionClick.emit(event.target.value);
  }

  handleOnBlur(event) {
    this.onBlur.emit(event.target.value);
    if (!this.controlled) {
      this.value = event.target.value;
      this.cdRef.detectChanges();
    }
  }

  handleOnFocus() {
    if (this.autocompleteOptions.length) {
      this.autosuggestVisible = true;
      this.cdRef.detectChanges();
    }
  }

  handleOnFocusOut() {
    if (this.autosuggestVisible) {
      this.service.onFocused.next(-1);
      this.autosuggestVisible = false;
      this.cdRef.detectChanges();
    }
  }

  handleOnClickOption(event) {
    this.onChange.emit("");
    if (!this.controlled) {
      this.value = event;
      this.inputRef.nativeElement.value = this.value;
      this.cdRef.detectChanges();
    }
    this.handleOnFocusOut();
  }

  handleOnKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this.service.onArrowDown();
        this.handleOnFocus();
        break;
      case "ArrowUp":
        event.preventDefault();
        this.service.onArrowUp();
        this.handleOnFocus();
        break;
      case "Enter":
        break;
      case "Escape":
        event.preventDefault();
        this.handleDefaultClearAction();
        this.handleOnFocusOut();
        break;
    }
  }
}
