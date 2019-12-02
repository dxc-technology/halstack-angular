import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnChanges,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "dxc-slider",
  templateUrl: "./dxc-slider.component.html",
  styleUrls: [
    "./dxc-slider.component.scss",
    "./dxc-light-slider.scss",
    "./dxc-dark-slider.scss"
  ]
})
export class DxcSliderComponent implements OnChanges {
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;
  @HostBinding("class.disabled") isDisabled: boolean = false;

  //Default values
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() showLimitValues: boolean = false;
  @Input() showInput: boolean = false;
  @Input() value: number = 0;
  @Input() theme: string = "light";

  @Input() name: string;
  @Input() disabled: boolean;
  @Input() required: boolean;

  @Output() dragEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() inputBlur: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('input',{static:true}) input: ElementRef;
  
  tickInterval: any;


  public ngOnChanges(): void {
    this.tickInterval = this.step > 1 ? 1 : 0;
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    this.isDisabled = this.disabled;
  }

  /**
   * Executed while  slider value moves or when user press a key in input
   *  @param $event
   */
  public valueChanged($event: any): void {
    let newValue;
    if($event.target) {
      newValue = $event.target.value;
    } else {
      newValue = $event.value;
    }
    
    if (newValue > this.max) {
      newValue = this.max;
    }
    if (newValue < this.min) {
      newValue = this.min;
    }
    this.value =newValue;
    this.input.nativeElement.value = newValue;
    this.valueChange.emit(newValue);
  }

  /**
   *  Eexecuted once the user has ended dragging
   * @param $event
   */
  public mouseUp($event): void {
    this.dragEnd.emit(this.value || this.input.nativeElement.value);

  }

  /**
   *Executed when input lost the focus
   */
  public onBlur($event): void {
   
    this.inputBlur.emit($event.target.value);
  }
}
