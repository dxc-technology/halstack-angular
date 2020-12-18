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

  sidenavArrow: any;

  constructor(
    private utils: CssUtils,
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {}

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
    this.updateCss();
  }

  ngAfterViewInit() {
    this.updateCss();
    this.cdr.detectChanges();
  }

  updateCss() {
    this.innerWidth = this.elementRef.nativeElement.clientWidth;
    this.className = `${this.getDynamicStyle({
      ...this.defaultInputs.getValue(),
      innerWidth: this.innerWidth,
    })}`;
  }

  getDynamicStyle(inputs) {
    return css`
      display: flex;
      position: relative;
      flex-direction: column;
      background-color: var(--sidenav-backgroundColor);
      width: 300px;
      box-sizing: border-box;
      ${this.utils.getPaddings(inputs.padding)}
      z-index: auto;
    `;
  }
}
