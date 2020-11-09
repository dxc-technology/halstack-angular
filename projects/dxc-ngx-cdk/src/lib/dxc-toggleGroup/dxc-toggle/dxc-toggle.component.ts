import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    SimpleChanges
  } from "@angular/core";
  import { BehaviorSubject } from "rxjs";
  import { css } from "emotion";
  
  @Component({
    selector: "dxc-toggle",
    templateUrl: "./dxc-toggle.component.html",
  })
  export class DxcToggleComponent implements OnInit {

    @Input() label: string;
    @Input() iconSrc: string = undefined;
    @Input() selected: boolean;

    constructor() {}
  
    ngOnInit(){

    }
  }
  