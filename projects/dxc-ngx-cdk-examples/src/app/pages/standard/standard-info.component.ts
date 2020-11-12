import { Component } from '@angular/core';

@Component({
  selector: 'standard-info',
  templateUrl: './standard-info.component.html',
  styleUrls: ['./standard-info.component.scss']
})
export class StandardInfoComponent {

  constructor()  {}

  social = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: "./assets/images/linkedin.svg"
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: "./assets/images/twitter.svg"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: "./assets/images/facebook.svg"
    }
  ];

  bottom = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook"
    }
  ];

}
