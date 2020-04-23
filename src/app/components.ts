import { SliderInfoComponent } from 'src/app/pages/slider/slider-info.component';
import { CheckboxInfoComponent } from './pages/checkbox/checkbox-info.component';
import { DialogInfoComponent } from './pages/dialog/dialog-info.component';
import { HeaderInfoComponent } from './pages/header/header-info.component';
import { ButtonInfoComponent } from './pages/button/button-info.component';
import { DateInfoComponent } from './pages/date/date-info.component';
import { RadioInfoComponent } from './pages/radio/radio-info.component';
import { SelectInfoComponent } from './pages/select/select-info.component';
import { SpinnerInfoComponent } from './pages/spinner/spinner.component';
import { SwitchInfoComponent } from './pages/switch/switch-info.component';
import { DropdownInfoComponent } from './pages/dropdown/dropdown-info.component';
import { ToggleInfoComponent } from './pages/toggle/toggle-info.component';
import { TextInputInfoComponent } from './pages/inputText/text-input-info.component';
import { FooterInfoComponent } from './pages/footer/footer-info.component';
import { TableInfoComponent } from './pages/table/table-info.component';
import { ProgressInfoComponent } from './pages/progressBar/progressBar-info.component';
import { TabsInfoComponent } from './pages/tabs/tabs-info.component';
import { DxcUploadComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-upload/dxc-upload.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { AlertComponent } from './pages/alert/alert.component';
import { BoxComponent } from './pages/box/box.component';
import { AllComponent } from './pages/all/all.component';
import { CardInfoComponent } from './pages/card/card-info.component';
import { TagInfoComponent } from './pages/tag-info/tag-info.component';
import { TabbedSectionComponent } from './pages/tabbed-section/tabbed-section.component';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { LinkInfoComponent } from './pages/link/link-info.component';
import { SidenavInfoComponent } from './pages/sidenav/sidenav-info.component';
import { WizardComponent } from './pages/wizard/wizard.component';


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
        name: 'Link',
        route: 'link',
        component:  LinkInfoComponent
    },
    {
        name: 'Paginator',
        route: 'paginator',
        component:  PaginatorComponent
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
        name: 'Sidenav',
        route: 'sidenav',
        component: SidenavInfoComponent
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
        name: 'Wizard',
        route: 'wizard',
        component: WizardComponent
    },
    {
        name: 'All',
        route: 'all',
        component: AllComponent
    }
   
]
