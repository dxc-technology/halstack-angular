import {
  Component,
  OnChanges,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material";

@Component({
  selector: "dxc-input-text",
  templateUrl: "./dxc-input-text.component.html",
  styleUrls: [
    "./dxc-input-text.component.scss",
    "./dxc-light-input.scss",
    "./dxc-dark-input.scss"
  ]
})
export class DxcTextInputComponent implements OnChanges {
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;
  @HostBinding("class.disabled") isDisabled: boolean = false;
  @Input() public prefix: string;
  @Input() public suffix: string;
  @Input() public prefixIconSrc: string;
  @Input() public suffixIconSrc: string;

  @Input() public theme: string = "light";
  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() public multiple: boolean = false;
  @Input() public invalid: boolean = false;

  @Input() public label: String;
  @Input() public assistiveText: string;
  @Input() public name: string;
  @Input() public value: string;

  @Output() public valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public blur: EventEmitter<any> = new EventEmitter<any>();

  public formControl = new FormControl();
  public matcher = new InvalidStateMatcher();

  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.isDisabled = this.disabled;
    // this.disabled ? this.formControl.disable() : this.formControl.enable();
    this.value = this.value || "";

    this.matcher.setInvalid(this.invalid);
  }
  public valueChanged($event: any): void {
    this.value = $event.target.value;
    this.valueChange.emit(this.value);
  }

  /**
   *Executed when input lost the focus
   */
  public onBlur($event): void {
    this.blur.emit($event.target.value);
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
class InvalidStateMatcher implements ErrorStateMatcher {
  private invalid: boolean;
  isErrorState(): boolean {
    return this.invalid;
  }

  public setInvalid(invalid: boolean): void {
    this.invalid = invalid;
  }
}
