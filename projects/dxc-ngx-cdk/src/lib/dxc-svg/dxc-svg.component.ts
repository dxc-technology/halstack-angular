import { Component, OnInit, Input, ElementRef } from "@angular/core";

@Component({
  selector: "dxc-svg",
  templateUrl: "./dxc-svg.component.html"
})
export class DxcSvg implements OnInit {
  @Input() src;
  elRef: ElementRef;

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {
    fetch(this.src)
      .then((response) => response.text())
      .then((text) => {
        this.elRef.nativeElement.innerHTML = text;
      });
  }
}
