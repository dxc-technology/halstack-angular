import {
  Component,
  OnInit,
  Input,
  Host,
  InjectionToken,
  Inject
} from "@angular/core";
import  { BackgroundProviderService}  from "./service/background-provider.service";
import { TinyColor } from '@ctrl/tinycolor';

@Component({
  selector: "background-provider",
  template: "<div><ng-content></ng-content></div>",
  providers: [{ provide: "bgService", useClass: BackgroundProviderService }]

})
export class BackgroundProvider implements OnInit {
  @Input() color: string;


  constructor(
    @Inject("bgService") public bgProviderService: BackgroundProviderService
  ) {}

   ngOnInit() {
     if (this.color){
      this.setType();
     }

  }

  private setType() {
    const colorType = this.checkColorType(this.color) ;
    debugger;
    this.bgProviderService.changeBackgroundColor(colorType);
  }

  private checkColorType(color:string):string{
    const colorInstance = new TinyColor(color);
    return colorInstance.isDark() ? 'dark' : 'light';
  }


}
