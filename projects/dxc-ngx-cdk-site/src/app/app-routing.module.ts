import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OverviewPageComponent } from "./pages/overview-page/overview-page.component";
import { ComponentsPageComponent } from "./pages/components-page/components-page.component";
import { AccordionComponent } from "./pages/accordion/accordion.component";
import { AlertComponent } from "./pages/alert/alert.component";
import { ApplicationLayoutComponent } from './pages/application-layout/app-layout.component';
import { BoxComponent } from "./pages/box/box.component";
import { ButtonComponent } from "./pages/button/button.component";
import { CardComponent } from "./pages/card/card.component";
import { CheckboxComponent } from "./pages/checkbox/checkbox.component";
import { DateComponent } from "./pages/date/date.component";
import { DesignGuidelinesPageComponent } from "./pages/design-guidelines-page/design-guidelines-page.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { RadioComponent } from "./pages/radio/radio.component";
import { V3SelectComponent } from './pages/v3-select/v3-select.component';
import { SliderComponent } from './pages/slider/slider.component';
import { SwitchComponent } from "./pages/switch/switch.component";
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { TextInputComponent } from './pages/text-input/text-input.component';
import { DropdownComponent } from "./pages/dropdown/dropdown.component";
import { DialogComponent } from "./pages/dialog/dialog.component";
import { TableComponent } from './pages/table/table.component';
import { TagComponent } from './pages/tag/tag.component';
import { ProgressbarComponent } from './pages/progressbar/progressbar.component';
import { TabbedSectionInfoComponent } from './pages/tabbed-section-info/tabbed-section-info.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { HeaderComponent } from './pages/header/header.component';
import { UploadComponent } from './pages/upload/upload.component';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { LinkComponent } from './pages/link/link.component';
import { HeadingComponent } from './pages/heading/heading.component';
import { ResultsetTableComponent } from './pages/resultset-table/resultset-table.component';
import { ChipComponent } from './pages/chip/chip.component';
import { V3TextareaComponent } from "./pages/v3-textarea/v3-textarea.component";
import { ToggleGroupComponent } from './pages/toggleGroup/toggleGroup.component';
import { AccordionGroupComponent } from './pages/accordion-group/accordion-group.component';
import { NewInputTextComponent } from "./pages/new-input-text/new-input-text.component";
import { PasswordComponent } from "./pages/password-input/password.component";
import { NumberComponent } from "./pages/number/number.component";
import { DateInputComponent } from "./pages/date-input/date-input.component";
import { TextareaComponent } from "./pages/textarea/textarea.component";
import { FileInputComponent } from "./pages/file-input/file-input.component";
import { SelectComponent } from "./pages/select/select.component";
import { AutosuggestComponent } from "./pages/autosuggest/autosuggest.component";


let routes: Routes = [];

  routes.push({ path: '', redirectTo: 'overview', pathMatch: 'full' }),
  routes.push({ path: 'overview', component: OverviewPageComponent }),
  routes.push({ path: 'guidelines', component: DesignGuidelinesPageComponent }),
  routes.push({
    path: 'theme-builder',
    loadChildren: () => import('./pages/theme-builder/theme-builder.module').then(m => m.ThemeBuilderPageModule)
  }),
  routes.push({
    path: 'components',
    component: ComponentsPageComponent,
  },
  {
    path: 'components/accordion',
    component: AccordionComponent
  },
  {
    path: 'components/accordion-group',
    component: AccordionGroupComponent
  },
  {
    path: 'components/alert',
    component: AlertComponent
  },
  {
    path: 'components/applicationLayout',
    component: ApplicationLayoutComponent
  },
  {
    path: 'components/box',
    component: BoxComponent
  },
  {
    path: 'components/button',
    component: ButtonComponent
  },
  {
    path: 'components/card',
    component: CardComponent
  },
  {
    path: 'components/table',
    component: TableComponent
  },
  {
    path: 'components/checkbox',
    component: CheckboxComponent
  },
  {
    path: 'components/chip',
    component: ChipComponent
  },
  {
    path: 'components/date',
    component: DateComponent
  },
  {
    path: 'components/dropdown',
    component: DropdownComponent
  },
  {
    path: 'components/radio',
    component: RadioComponent
  },
  {
    path: 'components/spinner',
    component: SpinnerComponent
  },
  {
    path: 'components/switch',
    component: SwitchComponent
  },
  {
    path: 'components/input',
    component: TextInputComponent
  },
  {
    path: 'components/v3Textarea',
    component: V3TextareaComponent
  },
  {
    path: 'components/toggleGroup',
    component: ToggleGroupComponent
  },
  {
    path: 'components/footer',
    component: FooterComponent
  },
  {
    path: 'components/header',
    component: HeaderComponent
  },
  {
    path: 'components/dialog',
    component: DialogComponent
  },
  {
    path: 'components/v3Select',
    component: V3SelectComponent
  },
  {
    path: 'components/slider',
    component: SliderComponent
  },
  {
    path: 'components/tag',
    component: TagComponent
  },
  {
    path: 'components/tabbed-section',
    component: TabbedSectionInfoComponent
  },
  {
    path: 'components/tabs',
    component: TabsComponent
  },
  {
    path: 'components/paginator',
    component: PaginatorComponent
  },
  {
    path: 'components/progressbar',
    component: ProgressbarComponent
  },
  {
    path: 'components/upload',
    component: UploadComponent
  },
  {
    path: 'components/sidenav',
    component: SidenavComponent
  },
  {
    path: 'components/link',
    component: LinkComponent
  },
  {
    path: 'components/wizard',
    component: WizardComponent
  },
  {
    path: 'components/heading',
    component: HeadingComponent
  },
  {
    path: 'components/newInputText',
    component: NewInputTextComponent
  },
  {
    path: 'components/passwordInput',
    component: PasswordComponent
  },
  {
    path: 'components/number',
    component: NumberComponent
  },
  {
    path: 'components/dateInput',
    component: DateInputComponent
  },
  {
    path: 'components/textarea',
    component: TextareaComponent
  },
  {
    path: 'components/fileInput',
    component: FileInputComponent
  },
  {
    path: 'components/select',
    component: SelectComponent
  },
  {
    path: 'components/resultsettable',
    component: ResultsetTableComponent
  },
  {
    path: 'components/autosuggest',
    component: AutosuggestComponent
  }
  );

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
