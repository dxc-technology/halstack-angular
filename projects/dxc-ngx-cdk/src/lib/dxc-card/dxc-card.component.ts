import { Component, OnInit, Input, Output, HostBinding, ViewChild, ElementRef } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "dxc-card",
  templateUrl: "./dxc-card.component.html",
  styleUrls: [
    "./dxc-card.component.scss",
    "./dxc-light-card.component.scss",
    "./dxc-dark-card.component.scss"
  ]
})
export class DxcCardComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() imagePosition: string;
  @Input() mode: string;
  @Input() theme: string;
  @Input() id: string;

  @Output() onClick = new EventEmitter<any>();

  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;
  
  @ViewChild('content', {static: false}) content:ElementRef;

  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
  }

  constructor() {}

  ngOnInit() {}

  ngAfterContentChecked() {
    if(this.content && this.content.nativeElement && this.content.nativeElement.children.length > 0){
      this.content.nativeElement.classList.add('childComponents');
    }
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event)
  }

  public hasChildren(): boolean {
    var div = document.getElementById('childComponents');
    console.log(div);
    if(div && div.childNodes && div.childNodes.length === 0) {
      return false;
    }
    return true;
  }
}
