import { Component, SimpleChanges } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { AlertComponent } from '../alert/alert.component';
import { BoxComponent } from '../box/box.component';
import { ButtonInfoComponent } from '../button/button-info.component';
import { CardInfoComponent } from '../card/card-info.component';
import { CheckboxInfoComponent } from '../checkbox/checkbox-info.component';
import { DateInfoComponent } from '../date/date-info.component';
import { DialogInfoComponent } from '../dialog/dialog-info.component';
import { DropdownInfoComponent } from '../dropdown/dropdown-info.component';
import { FooterInfoComponent } from '../footer/footer-info.component';
import { TextInputInfoComponent } from '../input-text/input-text.component';
import { ProgressInfoComponent } from '../progressBar/progressBar-info.component';
import { RadioInfoComponent } from '../radio/radio-info.component';
import { SelectInfoComponent } from '../select/select-info.component';
import { SliderInfoComponent } from '../slider/slider-info.component';
import { SpinnerInfoComponent } from '../spinner/spinner.component';
import { SwitchInfoComponent } from '../switch/switch-info.component';
import { TableInfoComponent } from '../table/table-info.component';
import { TabsInfoComponent } from '../tabs/tabs-info.component';
import { TabbedSectionComponent } from '../tabbed-section/tabbed-section.component';
import { TagInfoComponent } from '../tag-info/tag-info.component';
import { AllComponent } from '../all/all.component';
import { DxcUploadComponent } from '../../../../../dxc-ngx-cdk/src/lib/dxc-upload/dxc-upload.component';

DxcUploadComponent

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
   components = [
    {
        name: 'Accordion',
        route: 'accordion',
        component: AccordionComponent
    },
    {
        name: 'Alert',
        route: 'alert',
        component: AlertComponent
    },
    {
        name: 'Box',
        route: 'box',
        component: BoxComponent
    }, 
    {
        name: 'Button',
        route: 'button',
        component: ButtonInfoComponent
    },
    {
        name: 'Card',
        route: 'card',
        component:  CardInfoComponent
    },
    {
        name: 'Checkbox',
        route: 'checkbox',
        component:  CheckboxInfoComponent
    },
    {
        name: 'Date',
        route: 'date',
        component: DateInfoComponent
    } ,
    {
        name: 'Dialog',
        route: 'dialog',
        component:  DialogInfoComponent
    },
    {
        name: 'Dropdown',
        route: 'dropdown',
        component:  DropdownInfoComponent
    },
    {
        name: 'Footer',
        route: 'footer',
        component:  FooterInfoComponent
    },
    {
        name: 'Header',
        route: 'header',
        component:  HeaderInfoComponent
    },
    {
        name: 'Input Text',
        route: 'input_text',
        component:  TextInputInfoComponent
    },
    {
        name: 'Progress Bar',
        route: 'progress',
        component:  ProgressInfoComponent
    },
    {
        name: 'Radio',
        route: 'radio',
        component: RadioInfoComponent
    },
    {
        name: 'Select',
        route: 'select',
        component: SelectInfoComponent
    },
    {
        name: 'Slider',
        route: 'slider',
        component: SliderInfoComponent
    },
    {
        name: 'Spinner',
        route: 'spinner',
        component: SpinnerInfoComponent
    },
    {
        name: 'Switch',
        route: 'switch',
        component: SwitchInfoComponent
    },
    {
        name: 'Table',
        route: 'table',
        component: TableInfoComponent
    },
    {
        name: 'Tabs',
        route: 'tabs',
        component: TabsInfoComponent
    },
    {
        name: 'TabbedSection',
        route: 'tabbedSection',
        component: TabbedSectionComponent
    },
    {
        name: 'Tags',
        route: 'tags',
        component: TagInfoComponent
    },
    {
        name: 'Upload',
        route: 'upload',
        component: DxcUploadComponent
    },
    {
        name: 'All',
        route: 'all',
        component: AllComponent
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

  constructor()  {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    

  }

  underlined = true;

}
