import { BehaviorSubject } from 'rxjs';
import { css } from "emotion";
import { CssUtils } from '../utils';
import {
  Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: 'dxc-link',
  templateUrl: './dxc-link.component.html',
  providers: [CssUtils]
})
export class DxcLinkComponent {
  @Input() theme: string;
  @Input() underlined: boolean;
  @Input() inheritColor: boolean;
  @Input() text: string;
  @Input() iconSrc: string;
  @Input() iconPosition: string;
  @Input() href: string;
  @Input() newWindow: boolean;
  @Input() margin: string;

  @HostBinding("class") className;
  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;
  
  defaultInputs = new BehaviorSubject<any>({
    theme: "light",
    underlined: true,
    inheritColor: false,
    text: null,
    iconSrc: null,
    iconPosition: "before",
    href: null,
    newWindow: false,
    margin: null
  });

  constructor(private utils: CssUtils) { }

  ngOnInit() {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }


  getDynamicStyle(inputs) {
    return css`
      a {
        ${this.utils.getMargins(inputs.margin)}

        display: inline-flex;
        align-items: center;
        max-width: 100%;
        font-size: 16px;
        padding-bottom: 2px;
        text-decoration: none;

        ${inputs.underlined ? 
        `padding-bottom: 1px !important;
        border-bottom: 1px solid;` : 
        ``}

        color: ${!inputs.inheritColor ?
                inputs.theme === "light" ? '#006BF6' : '#4797FF'
                : inputs.theme === "dark" ? `#FFFFFF` : `inherit` } !important;

        ${this.getStateStyles(inputs)}

        img {
          width: 16px;
          height: 16px;
        }
        .icon-before {
          margin-right: 6px;
        }
        .icon-after {
          margin-left: 6px;
        }
      }
    `;
  }

  private getStateStyles(inputs) {
    return css`
      &:hover {
        color: ${inputs.theme === "light" ? `#006BF6` : `#4797FF`} !important;
        text-decoration: none;
        padding-bottom: 1px !important;
        border-bottom: 1px solid;
        cursor: pointer;
      }

      &:visited {
        color: ${inputs.theme === "light" ? `#8800F6` : `#C175FF`} !important;
      }
    `;
  } 
}
