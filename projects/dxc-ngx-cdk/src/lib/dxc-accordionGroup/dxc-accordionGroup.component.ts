import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from "@angular/core";
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
import {
  coerceNumberProperty,
  coerceBooleanProperty,
} from "@angular/cdk/coercion";

@Component({
  selector: "dxc-accordion-group",
  templateUrl: "./dxc-accordionGroup.component.html",
  providers: [CssUtils],
})
export class DxcAccordionGroupComponent implements OnChanges, OnInit {
  @Input() margin: any;
  @Input() 
  get indexActive(): any {
    return this._indexActive;
  }
  set indexActive(value: any) {
    if(value === undefined){
      this._indexActive = undefined;
    }
    else{
      this._indexActive = coerceNumberProperty(value);
    }
  }
  private _indexActive;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  @Output() onActiveChange = new EventEmitter<any>();

  @HostBinding("class") className;

  @ContentChildren(DxcAccordionComponent)
  dxcAccordion: QueryList<DxcAccordionComponent>;

  accordionContent: string;

  defaultInputs = new BehaviorSubject<any>({
    margin: null,
    indexActive: null,
    disabled: false,
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
    console.log("this.indexActive:", this.indexActive);
    if (this.indexActive === undefined) {
      this.uncontrolledAccordionGroup();
    } else {
      // this.controlledAccordionGroup();
    }
  }

  uncontrolledAccordionGroup() {
    this.dxcAccordion.forEach((instance, index) => {
      this.setDisabledAccordion(instance);
      instance.margin = "";
      console.log("instance:",instance);
      instance.onClick.subscribe((event) => {
        if (event) {
          this.accordionService.accordionActive.next(index);
        } else if (
          this.accordionService.accordionActive.getValue() === index &&
          !event
        ) {
          this.accordionService.accordionActive.next(undefined);
        }
      });
    });

    this.accordionService.accordionActive.subscribe((value) => {
      this.dxcAccordion.forEach((instance, index) => {
        this.setIsExpanded(instance, value === index);
      });
    });
  }

  // controlledAccordionGroup() {
  //   // if (index === this.indexActive) {
  //   //   this.accordionService.setAccordionActive(instance);
  //   // }

  //   this.dxcAccordion.forEach((instance, index) => {
  //     this.setDisabledAccordion(instance);
  //     instance.margin = "";
  //     instance.onClick.subscribe((event) => {
  //       if (event) {
  //         this.accordionService.accordionActive.next(index);
  //       } else if (
  //         this.accordionService.accordionActive.getValue() === index &&
  //         !event
  //       ) {
  //         this.accordionService.accordionActive.next(undefined);
  //       }
  //     });
  //   });

  //   this.accordionService.accordionActive.subscribe((value) => {
  //     this.dxcAccordion.forEach((instance, index) => {
  //       this.setIsExpanded(instance, value === index);
  //     });
  //   });
  // }

  private setIsExpanded(instance: DxcAccordionComponent, value: boolean) {
    instance.isExpanded = value;
    instance.renderedIsExpanded = value;
  }

  private setDisabledAccordion(instance: DxcAccordionComponent) {
    if (this.disabled) {
      instance.disabled = true;
    }
  }

  public handlerActiveChange(instance: DxcAccordionComponent) {

  }

  getDynamicStyle(inputs) {
    return css`
      ${this.cssUtils.getMargins(inputs.margin)}
    `;
  }
}
