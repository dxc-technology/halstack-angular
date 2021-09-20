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
import { DxcPasswordHelper } from "./dxc-password.helper";

@Component({
  selector: "dxc-password",
  templateUrl: "./dxc-password.component.html",
  providers: [DxcPasswordHelper, CssUtils],
})
export class DxcPasswordComponent implements OnInit, OnChanges {
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
  pattern = "";

  @Input()
  margin: Object | string;
  
  @Input()
  length = { min: undefined, max: undefined };

  defaultInputs = new BehaviorSubject<any>({
    error: "",
    helperText: "",
    value: undefined,
    label: "",
    margin: ""
  });

  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  onBlur = new EventEmitter<any>();

  @Output()
  onError = new EventEmitter<any>(true);

  @ViewChild("dxcInput", { static: false }) dxcInputRef: DxcNewInputTextComponent;

  hidden: boolean = true;

  type: string;

  private controlled: boolean;

  constructor(
    private cdRef: ChangeDetectorRef,
    private helper: DxcPasswordHelper
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
    this.value = event.value;
    this.onChange.emit({ value: event.value});
    this.controlled ? event.value = this.value : this.value = event.value;
    this.cdRef.detectChanges();
  }

  handleOnBlur(event) {
    this.onBlur.emit({ value: event.value});
    this.handleInternalValue({value: event.value, nativeValue: null });
    if (!this.controlled) {
      this.value = event.value;
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
