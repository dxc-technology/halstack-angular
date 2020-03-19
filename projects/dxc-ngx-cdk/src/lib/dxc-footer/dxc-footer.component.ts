import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";

@Component({
  selector: "dxc-footer",
  templateUrl: "./dxc-footer.component.html",
  styleUrls: ["./dxc-footer.component.scss"],
  providers: [CssUtils]
})
export class DxcFooterComponent implements OnChanges {
  @HostBinding("class") className;

  @Input() socialLinks: { href?: string; logoSrc?: string }[];
  @Input() bottomLinks: { href?: string; text?: string }[];

  @Input() copyright: string;
  @Input() margin: any;
  @Input() padding: any;  
  @Input() logoSrc: string;

  defaultImglogo: string;

  defaultInputs = new BehaviorSubject<any>({
    socialLinks: {},
    bottomLinks: {},
    copyright: "",
    logoSrc: null,
    margin:null,
    padding: null
  });

  // Styling
  footerContainerStyle:string;

  footerHeaderStyle: string  = css`
    display: flex;
    justify-content: space-between;
  `;
  socialIconsStyle: string = css`  
    display: flex;
    align-items: center;
  `;

  socialIconStyle: string = css`
    display: inline-flex;
  `;

  socialIconImageStyle: string = css`
    display: inline-flex;
    height: 25px;
    width: 25px;
  `;

  childComponentsStyle: string;

  footerFooterStyle:string = css`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row;
  `;

  socialLinksStyle: string = css`
    display: inline-flex;
    margin-left: 15px;
    &:first-child {
      margin-left: 0px;
    }
  `;

  bottomLinksStyle:string = css`
      padding-top: 6px;
      border-top: 2px solid var(--yellow);
      display: inline-flex;
      flex-wrap: wrap;
      max-width: 60%;
      .point {
        margin: 0px 10px;
        color: white;
      }
      a {
        text-decoration: none;
        color: var(--white);
        font-size: 12px;
      }
  `;

  buttomLinkStyle:string =css`
    text-decoration: none;
    color: var(--white);
    font-size: 12px;
  `;
  copyrightStyle: string = css`
    color: var(--white);
    font-size: 12px;
    max-width: 40%;
    text-align: "right";
  `;

  constructor(private utils: CssUtils) {}

  public ngOnInit() {
    this.footerContainerStyle = `${this.setFooterContainerStyle(this.defaultInputs.getValue())}`;
    this.childComponentsStyle = `${this.setChildComponentsStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.footerContainerStyle = `${this.setFooterContainerStyle(this.defaultInputs.getValue())}`;
    this.childComponentsStyle = `${this.setChildComponentsStyle(this.defaultInputs.getValue())}`;

  }


  setFooterContainerStyle(input: any){
    return css`
        padding: 20px 60px 20px 20px;
        font-family: "Open Sans", sans-serif;
        background-color: var(--black);
        ${this.utils.getTopMargin(input.margin)}    
    `;
  }

  setFooterHeaderStyle(){
    return css`
      display: flex;
      justify-content: space-between;
    `;
  }

  setChildComponentsStyle(inputs: any){
    return css`
      min-height: 15px;
      color: #fff;
      overflow: hidden;
      ${this.utils.getPaddings(inputs.padding)}
    `;
  }

  
}
