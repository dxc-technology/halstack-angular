import { Component, Host, Inject, OnInit, Optional } from '@angular/core';
import { BackgroundProviderService } from 'projects/dxc-ngx-cdk/src/lib/background-provider/service/background-provider.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  isExpanded = false;
  homeLogo = './assets/images/home.svg';
  facebookLogo = './assets/images/facebook.svg';

  constructor(@Host() @Optional() @Inject("bgService") public bgProviderService: BackgroundProviderService) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.bgProviderService?.$changeColor.subscribe(resp=> {
      console.log('type of backgroundprovider is ', resp);
    })
  }

  changeIsExpanded($event){
    this.isExpanded = $event;
    console.log($event);
  }

  uncontrolledIsExpanded($event){
    console.log('uncontrolled: ' + $event);
  }

}
