import {
  Component,
  Input,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import {ComponentPortal, DomPortalHost, CdkPortal} from '@angular/cdk/portal';
import { ViewChild } from '@angular/core';


@Component({
  selector: "app-dynamic-component",
  template: "",
  providers: []
})
export class DynamicComponentComponent implements AfterViewInit,OnDestroy {

  
  @Input()
  component;

  @Input()
  selector;

  @ViewChild(CdkPortal, {static:false}) cdkPortal;

  private portalHost: DomPortalHost;
  private portal;
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver, 
     private injector: Injector,
     private appRef: ApplicationRef
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    const selector = (document.querySelector('#' + this.selector));
    // if (selector!==null){
      this.portalHost = new DomPortalHost(
        selector,
        this.componentFactoryResolver,
        this.appRef,
        this.injector
      );
    this.portal = new ComponentPortal(this.component);
    if (this.portalHost!= undefined)
      this.portalHost.attach(this.portal);
    // }
    
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }

  
}
