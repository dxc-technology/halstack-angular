import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ContentChildren,
  QueryList,
  ChangeDetectorRef,
} from "@angular/core";
import { DxcToggleIconComponent } from "../dxc-toggle-icon/dxc-toggle-icon.component";
import { ToggleGroupService } from "../services/toggleGroup.service";
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: "dxc-toggle",
  templateUrl: "./dxc-toggle.component.html",
  providers: [],
})
export class DxcToggleComponent implements OnInit {
  @Input() label: string;
  @Input() value;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  @Output() public onClick: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class.selected") get valid() {
    return this.selected;
  }

  @ContentChildren(DxcToggleIconComponent)
  dxcToggleIcon: QueryList<DxcToggleIconComponent>;

  selected: boolean = false;

  constructor(
    private service: ToggleGroupService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    if (this.dxcToggleIcon.length !== 0) {
      this.label = null;
      this.cdRef.detectChanges();
    }
  }

  ngOnInit() {}

  onClickHandler() {
    this.service.setSelected(this.value);
  }

  ngOnChanges() {
    this.service.values.subscribe((values) => {
      if (values && values.includes(this.value) && this.selected === false) {
        this.selected = true;
      } else if (
        values &&
        !values.includes(this.value) &&
        this.selected === true
      ) {
        this.selected = false;
      }
    });
  }
}
