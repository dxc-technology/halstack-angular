import { AccordionPreviewComponent } from '../../previews/accordion-preview/accordion-preview.component';
import { AlertPreviewComponent } from '../../previews/alert-preview/alert-preview.component';
import { WizardPreviewComponent } from '../../previews/wizard-preview/wizard-preview.component';


export interface PreviewThemeBuilderComponent{
  name: string;
  component: any;
}


const tBuilderComponentsPreviewList:Array<PreviewThemeBuilderComponent> = [
  {name: 'accordion', component: AccordionPreviewComponent},
  {name: 'alert', component: AlertPreviewComponent},
  {name: 'wizard', component: WizardPreviewComponent}
];


const getBuilderPreviewComponentByName = (name: string): PreviewThemeBuilderComponent => {
  return tBuilderComponentsPreviewList.find((currentComponent) => currentComponent.name === name);
}


export default  getBuilderPreviewComponentByName;
