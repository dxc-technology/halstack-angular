import { Component, OnInit, Input, HostBinding, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CssUtils } from '../utils';
import { BehaviorSubject } from 'rxjs';
import { css } from "emotion";

@Component({
  selector: 'dxc-accordion',
  templateUrl: './dxc-accordion.component.html',
  styleUrls: ['./dxc-accordion.component.scss', './dxc-light-accordion.component.scss', './dxc-dark-accordion.component.scss'],
  providers : [CssUtils]

})
export class DxcAccordionComponent  {
  @Input() mode: string;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() assistiveText: string;
  @Input() disabled: boolean = false;
  @Input() isExpanded: boolean = false;
  @Output() onClick = new EventEmitter<any>();
  @Input() theme: string;
  opened = false;
  @Input() margin: any;
  @Input() padding: any;
  
  @HostBinding("class") className;
  @HostBinding('class.light') isLight: boolean = true;
  @HostBinding('class.dark') isDark: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    margin: null,
    padding: null,
    disabled: false
  });

  constructor(private cssutils: CssUtils){

  }
  public ngOnChanges(changes: SimpleChanges) :void { 
    if(this.iconPosition !== 'after'){
      this.iconPosition='before';
    }
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }

    const inputs = Object.keys(changes).reduce((result, item)=> {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ... this.defaultInputs.getValue(), ... inputs});
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public onClickHandler($event: any): void {
   if(!this.disabled) {
    this.opened = !this.opened;
    this.onClick.emit(this.opened);
   }
  }

    getDynamicStyle(inputs) {
    return css`
      cursor: ${inputs.disabled ? "not-allowed" : "pointer"};
      ${ this.cssutils.getMargins(inputs.margin) }
      div.mat-expansion-panel-content {
          div.mat-expansion-panel-body {
        ${ this.cssutils.getPaddings(inputs.padding) }
      }
    }
    `;
  }
}
