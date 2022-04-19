import { AccordionPreviewComponent } from "../../previews/accordion-preview/accordion-preview.component";
import { AlertPreviewComponent } from "../../previews/alert-preview/alert-preview.component";
import { WizardPreviewComponent } from "../../previews/wizard-preview/wizard-preview.component";
import { BoxPreviewComponent } from "../../previews/box-preview/box-preview.component";
import { ButtonPreviewComponent } from "../../previews/button-preview/button-preview.component";
import { CardPreviewComponent } from "../../previews/card-preview/card-preview.component";
import { CheckboxPreviewComponent } from "../../previews/checkbox-preview/checkbox-preview.component";
import { ChipPreviewComponent } from "../../previews/chip-preview/chip-preview.component";
import { DialogPreviewComponent } from "../../previews/dialog-preview/dialog-preview.component";
import { DropdownPreviewComponent } from "../../previews/dropdown-preview/dropdown-preview.component";
import { FooterPreviewComponent } from "../../previews/footer-preview/footer-preview.component";
import { HeaderPreviewComponent } from "../../previews/header-preview/header-preview.component";
import { HeadingPreviewComponent } from "../../previews/heading-preview/heading-preview.component";
import { InputTextPreviewComponent } from "../../previews/input-text-preview/input-text-preview.component";
import { LinkPreviewComponent } from "../../previews/link-preview/link-preview.component";
import { PaginatorPreviewComponent } from "../../previews/paginator-preview/paginator-preview.component";
import { ProgressBarPreviewComponent } from "../../previews/progress-bar-preview/progress-bar-preview.component";
import { RadioPreviewComponent } from "../../previews/radio-preview/radio-preview.component";
import { SidenavPreviewComponent } from "../../previews/sidenav-preview/sidenav-preview.component";
import { SliderPreviewComponent } from "../../previews/slider-preview/slider-preview.component";
import { SpinnerPreviewComponent } from "../../previews/spinner-preview/spinner-preview.component";
import { SwitchPreviewComponent } from "../../previews/switch-preview/switch-preview.component";
import { TagPreviewComponent } from "../../previews/tag-preview/tag-preview.component";
import { TabsPreviewComponent } from "../../previews/tabs-preview/tabs-preview.component";
import { ToggleGroupPreviewComponent } from "../../previews/toggle-group-preview/toggle-group-preview.component";
import { UploadPreviewComponent } from "../../previews/upload-preview/upload-preview.component";
import { TablePreviewComponent } from "../../previews/table-preview/table-preview.component";
import { DateInputPreviewComponent } from "../../previews/date-input-preview/date-input-preview.component";
import { TextareaPreviewComponent } from "../../previews/textarea-preview/textarea-preview.component";
import { FileInputPreviewComponent } from "../../previews/file-input-preview/file-input-preview.component";
import { SelectPreviewComponent } from "../../previews/select-preview/select-preview.component";
import { TextInputPreviewComponent } from "../../previews/text-input-preview/text-input-preview.component";
export interface PreviewThemeBuilderComponent {
  name: string;
  component: any;
}

const tBuilderComponentsPreviewList: Array<PreviewThemeBuilderComponent> = [
  { name: "accordion", component: AccordionPreviewComponent },
  { name: "alert", component: AlertPreviewComponent },
  { name: "box", component: BoxPreviewComponent },
  { name: "button", component: ButtonPreviewComponent },
  { name: "card", component: CardPreviewComponent },
  { name: "checkbox", component: CheckboxPreviewComponent },
  { name: "chip", component: ChipPreviewComponent },
  { name: "dateInput", component: DateInputPreviewComponent },
  { name: "dialog", component: DialogPreviewComponent },
  { name: "dropdown", component: DropdownPreviewComponent },
  { name: "fileInput", component: FileInputPreviewComponent },
  { name: "footer", component: FooterPreviewComponent },
  { name: "header", component: HeaderPreviewComponent },
  { name: "heading", component: HeadingPreviewComponent },
  { name: "inputText", component: InputTextPreviewComponent },
  { name: "textInput", component: TextInputPreviewComponent },
  { name: "link", component: LinkPreviewComponent },
  { name: "textarea", component: TextareaPreviewComponent },
  { name: "paginator", component: PaginatorPreviewComponent },
  { name: "progressBar", component: ProgressBarPreviewComponent },
  { name: "radio", component: RadioPreviewComponent },
  { name: "select", component: SelectPreviewComponent },
  { name: "sidenav", component: SidenavPreviewComponent },
  { name: "slider", component: SliderPreviewComponent },
  { name: "spinner", component: SpinnerPreviewComponent },
  { name: "switch", component: SwitchPreviewComponent },
  { name: "tag", component: TagPreviewComponent },
  { name: "table", component: TablePreviewComponent },
  { name: "tabs", component: TabsPreviewComponent },
  { name: "toggleGroup", component: ToggleGroupPreviewComponent },
  { name: "upload", component: UploadPreviewComponent },
  { name: "wizard", component: WizardPreviewComponent },
];

const getBuilderPreviewComponentByName = (
  name: string
): PreviewThemeBuilderComponent => {
  return tBuilderComponentsPreviewList.find(
    (currentComponent) => currentComponent.name === name
  );
};

export default getBuilderPreviewComponentByName;
