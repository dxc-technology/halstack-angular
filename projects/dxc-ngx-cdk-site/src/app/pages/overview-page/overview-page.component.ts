import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { OverviewInstallComponent } from 'src/app/components/overview/overview-install/overview-install.component';
import { OverviewUseComponent } from 'src/app/components/overview/overview-use/overview-use.component';
import { OverviewSupportComponent } from 'src/app/components/overview/overview-support/overview-support.component';
import { OverviewThemesComponent } from '../../components/overview/overview-themes/overview-themes.component';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  sections: Array<Section>;

  imgDxc: string;

  imgGithub: string;

  constructor() {
    this.sections = new Array<Section>();
  }

  ngOnInit() {
    this.imgGithub = 'assets/img/github-logo.svg';
    this.imgDxc = 'assets/img/dxclogo.svg';

    this.sections.push(
      { id: 0, label: 'INSTALL', selector: 'app-overview-install', component: OverviewInstallComponent },
      { id: 1, label: 'USE COMPONENTS', selector: 'app-overview-use', component: OverviewUseComponent },
      { id: 2, label: 'CUSTOM THEMES', selector: 'app-overview-themes', component: OverviewThemesComponent },
      { id: 3, label: 'SUPPORT', selector: 'app-overview-support', component: OverviewSupportComponent }
    );
  }


}
