import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-custom-content',
  templateUrl: './footer-custom-content.component.html',
  styleUrls: ['./footer-custom-content.component.scss']
})
export class FooterCustomContentComponent implements OnInit {
  socialLinks = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: '../assets/img/linkedin.svg'
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: '../assets/img/twitter.svg'
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: '../assets/img/facebook.svg'
    }
  ];
  bottomLinks = [
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
  constructor() { }

  ngOnInit() {
  }

}
