import {
  Component,
  Input,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { ComponentPortal, CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: "app-dynamic-component",
  template: "",
  providers: []
})
export class DynamicComponentComponent implements AfterViewInit, OnDestroy {


  @Input()
  component;

  @Input()
  selector;

  @ViewChild(CdkPortal, { static: false }) cdkPortal;

  private portalHost: DomPortalOutlet;
  private portal;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    public viewContainerRef: ViewContainerRef
  ) {
  }


  ngAfterViewInit(): void {
    const selector = (document.querySelector('#' + this.selector));
    // if (selector!==null){
    this.portalHost = new DomPortalOutlet(
      selector,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
    this.portal = new ComponentPortal(this.component);
    if (this.portalHost != undefined)
      this.portalHost.attach(this.portal);
    // }

  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }


}
