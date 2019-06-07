import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from "@angular/core";
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: "dxc-slider",
  templateUrl: "./dxc-slider.component.html",
  styleUrls: [
    "./dxc-slider.component.scss",
    "./dxc-light-slider.scss",
    "./dxc-dark-slider.scss"
  ]
})
export class DxcSliderComponent implements OnInit {
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

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
  tickInterval: any;
  rateControl: FormControl;
  ngOnInit(): void {
    this.rateControl = new FormControl("", [Validators.max(this.max), Validators.min(this.min)])
    this.tickInterval = this.step > 1 ? 1 : 0;
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    }
  }

  /**
   * Executed while  slider value moves or when user press a key in input
   *  @param $event
   */
  public valueChanged($event: any): void {
    let  newValue = $event.value || $event.target.value;
    if (newValue > this.max) {
      newValue = this.max;
    }
    if (newValue< this.min) {
      newValue = this.min;
    }

    this.valueChange.emit(newValue);
  }

  /**
   *  Eexecuted once the user has ended dragging
   * @param $event
   */
  public mouseUp($event): void {
    this.dragEnd.emit( $event.value);
  }

  /**
   *Executed when input lost the focus
   */
  public onBlur($event): void {
   
    this.inputBlur.emit( $event.target.value);
  }
}
