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

@Component({
  selector: "dxc-toggle",
  templateUrl: "./dxc-toggle.component.html",
  providers: [],
})
export class DxcToggleComponent implements OnInit {
  @Input() label: string;
  @Input() value;
  @Output() public onClick: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding("class.selected") get valid() {
    return this.selected;
  }

  @ContentChildren(DxcToggleIconComponent)
  dxcToggleIcon: QueryList<DxcToggleIconComponent>;

  selected: boolean = false;
  tabIndexValue: number = 0;

  constructor(
    private service: ToggleGroupService,
    private cdRef: ChangeDetectorRef
  ) {
    this.service.tabIndexValue.subscribe((value) => {
      if (value) {
        this.tabIndexValue = value;
      }
    });
  }

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
