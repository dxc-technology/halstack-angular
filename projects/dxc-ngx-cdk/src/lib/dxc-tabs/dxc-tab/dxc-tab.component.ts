import {
    Component,
    Input,
    OnChanges,
    ViewChild,
    HostBinding
  } from "@angular/core";
import { MatTab } from '@angular/material';
  
  @Component({
    selector: "dxc-tab",
    templateUrl: "./dxc-tab.component.html"
    
  })
  export class DxcTabComponent implements OnChanges {

    //Default values
    @Input() label: string;
    @Input() theme: string = "light";
    @Input() iconSrc: string;
    @Input() disabled: boolean;

   showDotIndicator: boolean =  false
   labelClass: string

   @HostBinding("class.piurla") isDark: boolean = true;
    @ViewChild(MatTab, {static:true})
    public matTab: MatTab;

    public ngOnChanges(): void {
     
      this.getLabelClass();
    }
  
    getLabelClass() {
        if(this.iconSrc && this.label) {
          this.labelClass ="icon-text"
        } else if (!this.iconSrc) {
          this.labelClass='only-text'
        } else {
          this.labelClass='only-icon'
        }

    }
  }
  