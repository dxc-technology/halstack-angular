import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    SimpleChanges
  } from "@angular/core";
  
  @Component({
    selector: "dxc-toggle",
    templateUrl: "./dxc-toggle.component.html",
  })
  export class DxcToggleComponent implements OnInit {

    @Input() label: string;
    @Input() iconSrc: string = undefined;
    @Input() index;
    @Output() public onClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}
  
    ngOnInit(){
    }

    onClickHandler() {
      this.onClick.emit(this.index);
    }
  }
  