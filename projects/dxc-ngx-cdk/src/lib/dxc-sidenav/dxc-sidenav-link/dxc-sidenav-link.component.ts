import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { CssUtils } from "../../utils";
import { SidenavService } from '../services/sidenav.service';
@Component({
  selector: "dxc-sidenav-link",
  templateUrl: "./dxc-sidenav-link.component.html",
  providers: [CssUtils],
})
export class DxcSidenavLinkComponent implements OnInit {
  @Input() href: string;
  @Output() onClick = new EventEmitter<any>();

  tabIndexValue: number = 0;

  constructor(public element: ElementRef, private service: SidenavService) {
    this.service.tabIndexValue.subscribe((value) => {
      if (value) {
        this.tabIndexValue = value
      }
    });
  }

  ngOnInit() {
  }

  public onClickHandler($event: any): void {
    this.onClick.emit($event);
  }

}
