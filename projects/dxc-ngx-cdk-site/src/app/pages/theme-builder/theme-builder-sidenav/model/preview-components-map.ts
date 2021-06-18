import { AccordionPreviewComponent } from '../../previews/accordion-preview/accordion-preview.component';
import { AlertPreviewComponent } from '../../previews/alert-preview/alert-preview.component';
import { WizardPreviewComponent } from '../../previews/wizard-preview/wizard-preview.component';
import { BoxPreviewComponent } from '../../previews/box-preview/box-preview.component';
import { ButtonPreviewComponent } from '../../previews/button-preview/button-preview.component';
import { CardPreviewComponent } from '../../previews/card-preview/card-preview.component';
import { CheckboxPreviewComponent } from '../../previews/checkbox-preview/checkbox-preview.component';
import { ChipPreviewComponent } from '../../previews/chip-preview/chip-preview.component';
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
  {name: 'wizard', component: WizardPreviewComponent}
];


const getBuilderPreviewComponentByName = (name: string): PreviewThemeBuilderComponent => {
  return tBuilderComponentsPreviewList.find((currentComponent) => currentComponent.name === name);
}


export default  getBuilderPreviewComponentByName;
