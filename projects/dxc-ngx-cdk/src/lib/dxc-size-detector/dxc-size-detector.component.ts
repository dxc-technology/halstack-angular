import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { DxcResizeService } from './../services/sizedetector/dxc-size-detector.service';
import { SCREEN_SIZE } from './../services/sizedetector/dxc-size-detector.enum';

@Component({
  selector: 'dxc-size-detector',
  templateUrl: './dxc-size-detector.component.html',
  styleUrls: ['./dxc-size-detector.component.scss']
})
export class DxcSizeDetectorComponent implements AfterViewInit {
  prefix = 'is-';
  sizes = [
    {
      id: SCREEN_SIZE.XS, name: 'xs',
      css: `d-block d-sm-none`
    },
    {
      id: SCREEN_SIZE.SM, name: 'sm',
      css: `d-none d-sm-block d-md-none`
    },
    {
      id: SCREEN_SIZE.MD, name: 'md',
      css: `d-none d-md-block d-lg-none`
    },
    {
      id: SCREEN_SIZE.LG, name: 'lg',
      css: `d-none d-lg-block d-xl-none`
    },
    {
      id: SCREEN_SIZE.XL, name: 'xl',
      css: `d-none d-xl-block`
    },
  ];

  constructor(private elementRef: ElementRef,
    private resizeSvc: DxcResizeService) { }

  @HostListener("window:resize", [])
  onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    const currentSize = this.sizes.find(x => {
      const el = this.elementRef.nativeElement.querySelector(`.${this.prefix}${x.id}`);
      const isVisible = window.getComputedStyle(el).display != 'none';

      return isVisible;
    });
    if (currentSize != null)
      this.resizeSvc.onResize(currentSize.id);
  }

}
