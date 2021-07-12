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
import { ThemeBuilderService } from "../service/theme-builder.service";


@Component({
  selector: "tb-dynamic-component",
  template: "",
  providers: []
})
export class ThemeBuilderDynamicComponentComponent implements AfterViewInit, OnDestroy {


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
    public viewContainerRef: ViewContainerRef,
    private themeBuilderService: ThemeBuilderService
  ) {
  }


  ngAfterViewInit(): void {
    this.themeBuilderService.themeBuilderComponent$.subscribe((resp)=> {
      if (this.portalHost)
        this.portalHost.detach();
      this.attachComponentToDom(this.selector, resp.component);
    })

  }

  private attachComponentToDom(select: string, component: any) {

    const selector = (document.querySelector('#' + select));
    // if (selector!==null){
    this.portalHost = new DomPortalOutlet(
      selector,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
    this.portal = new ComponentPortal(component);
    if (this.portalHost != undefined) {
      this.portalHost.attach(this.portal);
    }

  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }


}
