import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
  Optional,
  HostListener,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { RadioGroupService } from "../services/radio-group.service";
import { runInThisContext } from "vm";

@Component({
  selector: "dxc-radio-group-item",
  templateUrl: "./dxc-radio.component.html",
})
export class DxcRadioGroupItemComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  value: string;

  @Input()
  disabled: boolean;
  @HostBinding('class.selected')
  selected: boolean = false;

  constructor(private service: RadioGroupService) {
  }

  @HostListener("click")
  clickHandle() {
    this.service.newValue.next(this.value);
  }

  ngOnInit(): void {
    this.service.selectedValue.subscribe((newValue) => {
      if (this.value || (this.value === "" && newValue) || newValue === "") {
        this.selected = this.value === newValue;
      }
    });
  }
}
