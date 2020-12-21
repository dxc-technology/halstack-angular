import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  HostListener,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { css } from "emotion";
import { CssUtils } from "../utils";
import { responsiveSizes } from "../variables";
import { coerceBooleanProperty } from "@angular/cdk/coercion";

@Component({
  selector: "dxc-sidenav",
  templateUrl: "./dxc-sidenav.component.html",
  styleUrls: ["./dxc-sidenav.component.scss"],
  providers: [CssUtils],
})
export class DxcSidenavComponent implements OnInit {
  className;
  @Input() padding: any;

  innerWidth;

  defaultInputs = new BehaviorSubject<any>({
    padding: null,
  });

  @ViewChild("sidenavContainer", { static: false }) sidenav: ElementRef;
  sidenavArrow: any;

  constructor(private utils: CssUtils, private cdr: ChangeDetectorRef) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.updateCss();
  }

  ngOnInit() {
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      innerWidth: this.innerWidth,
    })}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    if (this.sidenav) {
      this.updateCss();
    }
  }

  ngAfterViewInit() {
    this.updateCss();
    this.cdr.detectChanges();
  }

  updateCss() {
    this.innerWidth = this.sidenav.nativeElement.clientWidth;
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      innerWidth: this.innerWidth,
    })}`;
  }

  getDynamicStyle(inputs) {
    return css`
      .sidenavContainerClass {
        display: flex;
        position: relative;

        dxc-sidenav-menu {
          display: flex;
          flex-direction: column;
          background-color: var(--sidenav-backgroundColor);
          width: ${inputs.innerWidth <= responsiveSizes.tablet
            ? "60%"
            : "300px"};
          box-sizing: border-box;
          ${this.utils.getPaddings(inputs.padding)}
          z-index: auto;
        }

        dxc-sidenav-content {
          box-sizing: border-box;
          flex-grow: 1;
          height: 100%;
          ${this.utils.getPaddings(inputs.padding)}
          width: calc(100%);
        }
      }
    `;
  }
}
