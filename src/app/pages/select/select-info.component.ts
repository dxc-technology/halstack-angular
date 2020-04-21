import { Component } from '@angular/core';

@Component({
  selector: 'select-info',
  templateUrl: './select-info.component.html',
  styleUrls: ['./select-info.component.scss']
})
export class SelectInfoComponent {

  constructor() {}
  optionsWithoutIcon = [
    {
      value: 1,
      label: "Amazon"
    },
    {
      value: 2,
      label: "Ebay"
    },
    {
      value: 3,
      label: "Apple"
    },
    {
      value: 4,
      label: "Google"
    }
  ];

  optionsWithIcon = [
    {
      value: 1,
      iconSrc: "assets/images/home.svg"
    },
    {
      value: 2,
      iconSrc: "assets/images/home.svg"
    },
    {
      value: 3,
      iconSrc: "assets/images/home.svg"
    }
  ];

  optionsWithIconAndLabels = [
    {
      value: 1,
      iconSrc: "assets/images/home.svg",
      label: "Home"
    },
    {
      value: 2,
      iconSrc: "assets/images/home.svg",
      label: "House"
    },
    {
      value: 3,
      iconSrc: "assets/images/home.svg",
      label: "Home is the selected option for this select component of the Csss"
    }
  ];
  optionsWithIconAndLabelsMinLongOneLine = [
    {
      value: 1,
      iconSrc: "assets/images/home.svg",
      label: "Ho"
    },
    {
      value: 2,
      iconSrc: "assets/images/home.svg",
      label: "Housesssssssssssssssssss"
    },
    {
      value: 3,
      iconSrc: "assets/images/home.svg",
      label: "Home is the selected option for this select component12"
    },
    {
      value: 4,
      iconSrc: "assets/images/home.svg",
      label: "Housessssssssssssssssss"
    },
    {
      value: 5,
      iconSrc: "assets/images/home.svg",
      label: "Home is the selected opt"
    }
  ];
  optionsWithIconAndLabelsMaxLongMultiLine = [
    {
      value: 1,
      iconSrc: "assets/images/home.svg",
      label: "Hom"
    },
    {
      value: 2,
      iconSrc: "assets/images/home.svg",
      label: "Housesssssssssssssssssss"
    },
    {
      value: 3,
      iconSrc: "assets/images/home.svg",
      label: "Home is the selected option for this select component123"
    }
  ];

  longOptionLabels = [
    {
      value: 1,
      label: "Home is the selected option for this select component of the Css"
    },
    {
      value: 2,
      label: "Houses"
    },
    {
      value: 3,
      label: "Housess"
    },
    {
      value: 4,
      label: "Habitatsssssssssssssssssssss"
    },
    {
      value: 5,
      label: "Habitatssssssssssssssssssssss"
    },
    {
      value: 6,
      label: "Home is the selected option for this select component of the Csss"
    },
    {
      value: 7,
      label: "Home is the selected option for this select component of this"
    }
  ];

  inputValue = "1";

  multipleSelected = '';

  onChange($event) {
    this.inputValue= $event;
    console.log($event);
  }

  onUncontrolledChange(value) {
    console.debug("uncontrolled change: " + value);
  }

  onMultipleChange($event) {
    this.multipleSelected = $event.filter(item => (item!='2'));
    console.log($event);
  }
}
