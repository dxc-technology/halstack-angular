import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
  Optional,
  HostListener,
  ElementRef,
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
  disabled: boolean = false;

  @HostBinding("class.selected")
  selected: boolean = false;

  @Input()
  indexValue: any;

  constructor(private service: RadioGroupService, private elRef:ElementRef) {
    this.service.indexToFocus.subscribe(index => {
      if(index >= 0) {
        if(this.indexValue === index) {
          this.elRef.nativeElement.focus();
        }
      }
    })
  }

  @HostListener("focus")
  onFocusHandler() {
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
