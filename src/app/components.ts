import { SliderInfoComponent } from 'src/app/pages/slider/slider-info.component';
import { CheckboxInfoComponent } from './pages/checkbox/checkbox-info.component';
import { DialogInfoComponent } from './pages/dialog/dialog-info.component';
import { HeaderInfoComponent } from './pages/header/header-info.component';
import { ButtonInfoComponent } from './pages/button/button-info.component';
import { DateInfoComponent } from './pages/date/date-info.component';
import { RadioInfoComponent } from './pages/radio/radio-info.component';
import { SpinnerInfoComponent } from './pages/spinner/spinner.component';
import { SwitchInfoComponent } from './pages/switch/switch-info.component';
import { DropdownInfoComponent } from './pages/dropdown/dropdown-info.component';
import { ToggleInfoComponent } from './pages/toggle/toggle-info.component';
import { TextInputInfoComponent } from './pages/inputText/text-input-info.component';
import { FooterInfoComponent } from './pages/footer/footer-info.component';
import { TableInfoComponent } from './pages/table/table-info.component';
import { DxcProgressbarComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-progressbar/dxc-progressbar.component';
import { DxcSelectComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-select/dxc-select.component';
import { DxcTabsComponent } from 'projects/dxc-ngx-cdk/src/lib/dxc-tabs/dxc-tabs.component';
import { DxcUploadComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-upload/dxc-upload.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { AlertComponent } from './pages/alert/alert.component';
import { BoxComponent } from './pages/box/box.component';
import { AllComponent } from './pages/all/all.component';
import { CardInfoComponent } from './pages/card/card-info.component';


export const Components = [
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
        component:  DxcProgressbarComponent
    },
    {
        name: 'Radio',
        route: 'radio',
        component: RadioInfoComponent
    },
    {
        name: 'Select',
        route: 'select',
        component: DxcSelectComponent
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
        component: DxcTabsComponent
    },
    {
        name: 'Toggle',
        route: 'toggle',
        component: ToggleInfoComponent
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
   
]
