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
  ViewChild,
  ChangeDetectorRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DxcNewInputTextComponent } from "../dxc-new-input-text/dxc-new-input-text.component";
import { CssUtils } from "../utils";
import { DxcNewInputPasswordHelper } from "./dxc-new-input-password.helper";

@Component({
  selector: "dxc-new-input-password",
  templateUrl: "./dxc-new-input-password.component.html",
  providers: [DxcNewInputPasswordHelper, CssUtils],
})
export class DxcNewInputPasswordComponent implements OnInit, OnChanges {
  @HostBinding("class") className;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  value: string;

  @Input()
  helperText: string;

  @Input()
  clearable = true;

  @Input()
  error = "";

  @Input()
  margin: Object | string;

  defaultInputs = new BehaviorSubject<any>({
    error: "",
    optional: false,
    helperText: "",
    value: undefined,
    name: "",
    label: "",
    margin: "",
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @ViewChild("dxcInput", { static: false }) dxcInputRef: DxcNewInputTextComponent;

  hidden: boolean = true;

  type: string;

  private controlled: boolean;

  constructor(
    private cdRef: ChangeDetectorRef,
    private helper: DxcNewInputPasswordHelper
  ) {}

  ngOnInit(): void {
    this.type = "password";
    this.className = `${this.helper.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;    
  }

  ngAfterViewInit(){
    this.dxcInputRef.inputRef.nativeElement.attributes.type.value = this.type;
  }

  ngOnChanges(changes: SimpleChanges): void {
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
    this.value = event;
    this.onChange.emit(event);
    this.controlled ? event = this.value : this.value = event;
    this.cdRef.detectChanges();
  }

  handleOnBlur(event) {
    this.onBlur.emit(event);
    this.handleInternalValue({value: event, nativeValue: null });
    if (!this.controlled) {
      this.value = event;
      this.cdRef.detectChanges();
    }
  }

  handleMaskPassword(){
    this.hidden ? this.type = "text" : this.type = "password";
    this.hidden = !this.hidden;
    this.dxcInputRef.inputRef.nativeElement.attributes.type.value = this.type;
  }

  private handleInternalValue({value, nativeValue}){
    if (!this.controlled) {
      this.value = value;
      if (nativeValue){
        this.dxcInputRef.inputRef.nativeElement.value = nativeValue;
      }
      this.cdRef.detectChanges();
    }
  }
}
