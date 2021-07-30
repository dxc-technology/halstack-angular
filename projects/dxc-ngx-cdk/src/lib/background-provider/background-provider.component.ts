import {
  Component,
  OnInit,
  Input,
  Optional,
  Self
} from "@angular/core";
import  { BackgroundProviderService}  from "./service/background-provider.service";
import { TinyColor } from '@ctrl/tinycolor';

@Component({
  selector: "background-provider",
  template: "<div><ng-content></ng-content></div>",
  providers: [BackgroundProviderService]

})
export class BackgroundProviderComponent implements OnInit {
  @Input() color: string;


  constructor(
    @Optional() @Self() private bgProviderService: BackgroundProviderService
  ) {}

   ngOnInit() {
     if (this.color){
      this.setType();
     }

  }

  private setType() {
    const colorType = this.checkColorType(this.color) ;
    this.bgProviderService.changeBackgroundColor(colorType);
  }

  private checkColorType(color:string):string{
    const colorInstance = new TinyColor(color);
    return colorInstance.isDark() ? 'dark' : 'light';
  }


}
