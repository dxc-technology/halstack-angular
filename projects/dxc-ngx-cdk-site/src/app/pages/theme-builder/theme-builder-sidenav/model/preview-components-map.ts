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
  {name: 'heading', component: DialogPreviewComponent},
  {name: 'inputText', component: DialogPreviewComponent},
  {name: 'link', component: DialogPreviewComponent},
  {name: 'paginator', component: DialogPreviewComponent},
  {name: 'progressBar', component: DialogPreviewComponent},
  {name: 'radio', component: DialogPreviewComponent},
  {name: 'select', component: DialogPreviewComponent},
  {name: 'sidenav', component: DialogPreviewComponent},
  {name: 'slider', component: DialogPreviewComponent},
  {name: 'spinner', component: DialogPreviewComponent},
  {name: 'switch', component: DialogPreviewComponent},
  {name: 'tag', component: DialogPreviewComponent},
  {name: 'table', component: DialogPreviewComponent},
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
