import {
  Component,
  Input,
  HostBinding,
  OnChanges
} from "@angular/core";
@Component({
  selector: "dxc-footer",
  templateUrl: "./dxc-footer.component.html",
  styleUrls: [
    "./dxc-footer.component.scss"
  ]
})
export class DxcFooterComponent implements OnChanges {
  @HostBinding("class.dxc-light") isLight: boolean = true;
  @HostBinding("class.dxc-dark") isDark: boolean = false;

  @Input() public socialLinks: { href?: string; logoSrc?: string }[];
  @Input() public bottomLinks: { href?: string; text?: string }[];

  @Input() public copyright: string;

  @Input() public logoSrc: string;

  public ngOnInit() {}

  public ngOnChanges(): void {
    
  }
}
