import { Component, OnInit, OnChanges } from "@angular/core";
import { CssUtils } from "../utils";
import {
  Input,
  HostBinding,
  ContentChildren,
  QueryList,
  SimpleChanges,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { DxcAccordionComponent } from "../dxc-accordion/dxc-accordion.component";
import { AccordionService } from "./services/accordionService.service";

@Component({
  selector: "dxc-accordion-group",
  templateUrl: "./dxc-accordionGroup.component.html",
  providers: [CssUtils],
})
export class DxcAccordionGroupComponent implements OnChanges, OnInit {
  @Input() margin: any;

  @HostBinding("class") className;

  @ContentChildren(DxcAccordionComponent)
  dxcAccordion: QueryList<DxcAccordionComponent>;

  accordionContent: string;

  activeAccordion: DxcAccordionComponent = null;

  defaultInputs = new BehaviorSubject<any>({
    margin: null,
  });

  constructor(
    private cssUtils: CssUtils,
    private accordionService: AccordionService
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.accordionContent = `${this.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngOnInit() {
    this.accordionContent = `${this.getDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngAfterContentInit() {
    let firstAccordion = false;
    this.dxcAccordion.forEach((instance) => {
      if (instance.isExpanded && !firstAccordion) {
        firstAccordion = true;
        this.accordionService.setAccordionActive(instance);
      }
      instance.onClick.subscribe((event) => {
        if (event) {
          this.accordionService.setAccordionActive(instance);
        } else if (this.activeAccordion == instance && !event) {
          this.accordionService.setAccordionActive(null);
        }
      });
    });
    this.accordionService.accordionActive.subscribe((value) => {
      this.activeAccordion = value;
      this.dxcAccordion.forEach((instance) => {
        if (this.activeAccordion !== instance) {
          instance.isExpanded = false;
          instance.renderedIsExpanded = false;
        } else if (this.activeAccordion === instance) {
          instance.isExpanded = true;
          instance.renderedIsExpanded = true;
        }
      });
    });
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.cssUtils.getMargins(inputs.margin)}
    `;
  }
}
