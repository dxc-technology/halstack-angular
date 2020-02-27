import { Component } from '@angular/core';

@Component({
  selector: 'header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent {

  options = [
    {
      value: 1,
      label: "Facebook"
    },
    {
      value: 2,
      label: "Twitter"
    },
    {
      value: 3,
      label: "Linkedin"
    }
  ];

  selected = true;

  paddingXxSmall = {
    right: "xxsmall"
  };

  paddingXSmall = {
    right: "xsmall"
  };

  paddingSmall = {
    right: "small"
  };

  paddingMedium = {
    right: "medium"
  };

  paddingLarge = {
    right: "large"
  };

  paddingXLarge = {
    right: "xlarge"
  };

  paddingXxLarge = {
    right: "xxlarge"
  };

  constructor()  {}
  underlined = true;
}
