import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "dxc-toggle",
  templateUrl: "./dxc-toggle.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class DxcToggleComponent {
  @Input() label: string;
  @Input() value;
  @Output() public onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onKeyPress: EventEmitter<any> = new EventEmitter<any>();
  isFirst: boolean = false;
  isLast:boolean = false;

  @HostBinding("class.selected") get valid() {
    return this.selected;
  }

  @HostBinding("class.first") get first() {
    return this.isFirst;
  }

  @HostBinding("class.last") get last() {
    return this.isLast;
  }

  selected: boolean = false;
  tabIndexValue: number = 0;

  onClickHandler() {
    this.onClick.emit(this.value);
  }

  onHandleKeyPressHandler(event) {
    if ((event.code === "Enter" || event.code === "Space")){
      this.onKeyPress.emit(this.value);
    }
  };

}
