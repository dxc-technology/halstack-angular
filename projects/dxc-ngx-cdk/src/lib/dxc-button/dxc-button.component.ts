import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dxc-button',
  templateUrl: './dxc-button.component.html',
  styleUrls: ['./dxc-button.component.scss', './dxc-light-button.component.scss', './dxc-dark-button.component.scss'],
})
export class DxcButtonComponent  {
  @Input() mode: string;
  @Input() theme: string;
  @Input() disabled: boolean;
  @Input() disableRipple: boolean;
  @Input() label: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  
  @Output() onClick = new EventEmitter<any>();

  @HostBinding('class.light') isLight: boolean = true;
  @HostBinding('class.dark') isDark: boolean = false;


  public ngOnChanges() :void { 
    if(this.iconPosition !== 'after'){
      this.iconPosition='before';
    }
    if(this.theme  === 'dark') {
      this.isDark = true;
      this.isLight = false;
    }
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event)
  }
}
