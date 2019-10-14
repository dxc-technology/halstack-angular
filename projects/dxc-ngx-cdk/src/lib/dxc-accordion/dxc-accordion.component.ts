import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dxc-accordion',
  templateUrl: './dxc-accordion.component.html',
  styleUrls: ['./dxc-accordion.component.scss', './dxc-light-accordion.component.scss', './dxc-dark-accordion.component.scss'],
})
export class DxcAccordionComponent  {
  @Input() mode: string;
  @Input() theme: string;
  @Input() disabled: boolean = false;
  @Input() label: string;
  @Input() assistiveText: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;

  opened = false;
  
  @Output() onClick = new EventEmitter<any>();

  @HostBinding('class.light') isLight: boolean = true;
  @HostBinding('class.dark') isDark: boolean = false;


  public ngOnChanges() :void { 
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
  }

  public onClickHandler($event: any): void {
   if(!this.disabled) {
    this.opened = !this.opened;
    this.onClick.emit(this.opened);
   }
  }
}
