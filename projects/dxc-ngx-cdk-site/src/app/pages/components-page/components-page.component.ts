import { Component, OnInit, HostListener } from '@angular/core';
import { Components } from '../../components';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent implements OnInit {

  componentsMargin = {
    bottom: 'large'
  }

  components: Array<any>;
  default:boolean;

  responsiveClass: string;
  innerWidth;

  responsiveSizes = {
    mobileSmall: "320",
    mobileMedium: "375",
    mobileLarge: "425",
    tablet: "768",
    laptop: "1024",
    desktop: "1440"
  }
  underlined = false;
  boxMargin={ top: "small", bottom: 'small'};
  boxPadding = 'small';


  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    if (this.innerWidth <= this.responsiveSizes.tablet && this.innerWidth > this.responsiveSizes.mobileLarge) {
      this.responsiveClass = "tablet";
    } else if(this.innerWidth <= this.responsiveSizes.mobileLarge) {
      this.responsiveClass = "mobile";
    } else {
      this.responsiveClass = "desktop";
    }
  }

  constructor(private router:Router) {
    this.components = Components;
    this.router.events.subscribe(event => {
      window.scroll(0, 0);
      if(event instanceof NavigationEnd) {
        if(event.url === "/components"){
          this.default = true;
        }
        else{
          this.default = false;
        }
      }
    });
  }

  navigateToRoute(component: string) {
    this.router.navigate(['components/' + component]);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= this.responsiveSizes.tablet && this.innerWidth > this.responsiveSizes.mobileLarge) {
      this.responsiveClass = "tablet";
    } else if(this.innerWidth <= this.responsiveSizes.mobileLarge) {
      this.responsiveClass = "mobile";
    } else {
      this.responsiveClass = "desktop";
    }
  }

}
