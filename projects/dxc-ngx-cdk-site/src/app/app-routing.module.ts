import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OverviewPageComponent } from "./pages/overview-page/overview-page.component";
import { ComponentsPageComponent } from "./pages/components-page/components-page.component";
import { AccordionComponent } from "./pages/accordion/accordion.component";
import { AlertComponent } from "./pages/alert/alert.component";
import { AutocompleteComponent } from "./pages/autocomplete/autocomplete.component"
import { BoxComponent } from "./pages/box/box.component";
import { ButtonComponent } from "./pages/button/button.component";
import { CardComponent } from "./pages/card/card.component";
import { CheckboxComponent } from "./pages/checkbox/checkbox.component";
import { DateComponent } from "./pages/date/date.component";
import { DesignGuidelinesPageComponent } from "./pages/design-guidelines-page/design-guidelines-page.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { RadioComponent } from "./pages/radio/radio.component";
import { SelectComponent } from './pages/select/select.component';
import { SliderComponent } from './pages/slider/slider.component';
import { SwitchComponent } from "./pages/switch/switch.component";
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { TextInputComponent } from './pages/text-input/text-input.component';
import { DropdownComponent } from "./pages/dropdown/dropdown.component";
import { DialogComponent } from "./pages/dialog/dialog.component";
import { TableComponent } from './pages/table/table.component';
import { ToggleComponent } from './pages/toggle/toggle.component';
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

let routes: Routes = [];

  routes.push({ path: '', redirectTo: 'overview', pathMatch: 'full' }),
  routes.push({ path: 'overview', component: OverviewPageComponent }),
  routes.push({ path: 'guidelines', component: DesignGuidelinesPageComponent }),
  routes.push({
    path: 'components',
    component: ComponentsPageComponent,
    children: [
      {
        path: 'accordion',
        component: AccordionComponent,
        outlet: 'components'
      },
      {
        path: 'alert',
        component: AlertComponent,
        outlet: 'components'
      },
      {
        path: 'autocomplete',
        component: AutocompleteComponent,
        outlet: 'components'
      },
      {
        path: 'box',
        component: BoxComponent,
        outlet: 'components'
      },
      {
        path: "",
        redirectTo: "button",
        pathMatch: "full"
      },
      {
        path: 'button',
        component: ButtonComponent,
        outlet: 'components'
      },
      {
        path: 'card',
        component: CardComponent,
        outlet: 'components'
      },
      {
        path: 'table',
        component: TableComponent ,
        outlet: 'components'
      },
      {
        path: 'checkbox',
        component: CheckboxComponent,
        outlet: 'components'
      },
      {
        path: 'date',
        component: DateComponent,
        outlet: 'components'
      },
      {
        path: 'dropdown',
        component: DropdownComponent,
        outlet: 'components'
      },
      {
        path: 'radio',
        component: RadioComponent,
        outlet: 'components'
      },
      {
        path: 'spinner',
        component: SpinnerComponent,
        outlet: 'components'
      },
      {
        path: 'switch',
        component: SwitchComponent,
        outlet: 'components'
      },
      {
        path: 'input',
        component: TextInputComponent,
        outlet: 'components'
      },
      {
        path: 'footer',
        component: FooterComponent,
        outlet: 'components'
      },
      {
        path: 'header',
        component: HeaderComponent,
        outlet: 'components'
      },
      {
        path: 'toggle',
        component: ToggleComponent,
        outlet: 'components'
      },
      {
        path: 'dialog',
        component: DialogComponent,
        outlet: 'components'
      },
      {
        path: 'select',
        component: SelectComponent ,
        outlet: 'components'
      },
      {
        path: 'slider',
        component: SliderComponent ,
        outlet: 'components'
      },
      {
        path: 'tag',
        component: TagComponent,
        outlet: 'components'
      },
      {
        path: 'tabbed-section',
        component: TabbedSectionInfoComponent,
        outlet: 'components'
      },
      {
        path: 'tabs',
        component: TabsComponent,
        outlet: 'components'
      },
      {
        path: 'paginator',
        component: PaginatorComponent,
        outlet: 'components'
      },
      {
        path: 'progressbar',
        component: ProgressbarComponent,
        outlet: 'components'
      },
      {
        path: 'upload',
        component: UploadComponent,
        outlet: 'components'
      },
      {
        path: 'sidenav',
        component: SidenavComponent,
        outlet: 'components'
      },
      {
        path: 'link',
        component: LinkComponent,
        outlet: 'components'
      },
      {
        path: 'wizard',
        component: WizardComponent,
        outlet: 'components'
      },
      {
        path: 'heading',
        component: HeadingComponent,
        outlet: 'components'
      },
      {
        path: 'resultsettable',
        component: ResultsetTableComponent,
        outlet: 'components'
      }
    ]
  });

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
