import { AccordionPreviewComponent } from '../../previews/accordion-preview/accordion-preview.component';
import { AlertPreviewComponent } from '../../previews/alert-preview/alert-preview.component';
import { WizardPreviewComponent } from '../../previews/wizard-preview/wizard-preview.component';
import { BoxPreviewComponent } from '../../previews/box-preview/box-preview.component';
import { ButtonPreviewComponent } from '../../previews/button-preview/button-preview.component';
import { CardPreviewComponent } from '../../previews/card-preview/card-preview.component';
import { CheckboxPreviewComponent } from '../../previews/checkbox-preview/checkbox-preview.component';
import { ChipPreviewComponent } from '../../previews/chip-preview/chip-preview.component';
import { DatePreviewComponent } from '../../previews/date-preview/date-preview.component';
import { DialogPreviewComponent } from '../../previews/dialog-preview/dialog-preview.component';
import { DropdownPreviewComponent } from '../../previews/dropdown-preview/dropdown-preview.component';
import { FooterPreviewComponent } from '../../previews/footer-preview/footer-preview.component';
import { HeaderPreviewComponent } from '../../previews/header-preview/header-preview.component';
import { HeadingPreviewComponent } from '../../previews/heading-preview/heading-preview.component';
import { InputTextPreviewComponent } from '../../previews/input-text-preview/input-text-preview.component';
import { LinkPreviewComponent } from '../../previews/link-preview/link-preview.component';
import { PaginatorPreviewComponent } from '../../previews/paginator-preview/paginator-preview.component';
import { ProgressBarPreviewComponent } from '../../previews/progress-bar-preview/progress-bar-preview.component';
import { RadioPreviewComponent } from '../../previews/radio-preview/radio-preview.component';
import { TablePreviewComponent } from '../../previews/table-preview/table-preview.component';
export interface PreviewThemeBuilderComponent{
  name: string;
  component: any;
}


const tBuilderComponentsPreviewList:Array<PreviewThemeBuilderComponent> = [
  {name: 'accordion', component: AccordionPreviewComponent},
  {name: 'alert', component: AlertPreviewComponent},
  {name: 'box', component: BoxPreviewComponent},
  {name: 'button', component: ButtonPreviewComponent},
  {name: 'card', component: CardPreviewComponent},
  {name: 'checkbox', component: CheckboxPreviewComponent},
  {name: 'chip', component: ChipPreviewComponent},
  {name: 'date', component: DatePreviewComponent},
  {name: 'dialog', component: DialogPreviewComponent},
  {name: 'dropdown', component: DropdownPreviewComponent},
  {name: 'footer', component: FooterPreviewComponent},
  {name: 'header', component: HeaderPreviewComponent},
  {name: 'heading', component: HeadingPreviewComponent},
  {name: 'inputText', component: InputTextPreviewComponent},
  {name: 'link', component: LinkPreviewComponent},
  {name: 'paginator', component: PaginatorPreviewComponent},
  {name: 'progressBar', component: ProgressBarPreviewComponent},
  {name: 'radio', component: RadioPreviewComponent},
  {name: 'select', component: DialogPreviewComponent},
  {name: 'sidenav', component: DialogPreviewComponent},
  {name: 'slider', component: DialogPreviewComponent},
  {name: 'spinner', component: DialogPreviewComponent},
  {name: 'switch', component: DialogPreviewComponent},
  {name: 'tag', component: DialogPreviewComponent},
  {name: 'table', component: TablePreviewComponent},
  {name: 'tabs', component: DialogPreviewComponent},
  {name: 'textarea', component: DialogPreviewComponent},
  {name: 'toggleGroup', component: DialogPreviewComponent},
  {name: 'upload', component: DialogPreviewComponent},
  {name: 'wizard', component: WizardPreviewComponent}
];


const getBuilderPreviewComponentByName = (name: string): PreviewThemeBuilderComponent => {
  return tBuilderComponentsPreviewList.find((currentComponent) => currentComponent.name === name);
}


export default  getBuilderPreviewComponentByName;
