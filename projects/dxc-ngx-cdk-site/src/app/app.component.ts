import { Component, Inject } from "@angular/core";
import { ThemeService } from "@dxc-technology/halstack-angular";
import { customTheme } from '../assets/styles/themesProperties';
import { HttpClient } from '@angular/common/http';
import portal from '../assets/portal.json';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-dxc-site";
  headerPadding = { left: "medium", right: "medium" };
  versions: Array<any> = [];
  selectedVersion;
  suscription;

  constructor(
    @Inject("ThemeService") private themeService: ThemeService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.themeService.registerTheme(customTheme);
    this.suscription = this.http.get(portal.url
    ).subscribe(
      (resp: Array<any>) => {
        this.versions = resp.map((item) => { return { label: `${item.versionNumber}`, value: `${item.versionNumber}`, url: item.versionURL, current: item.current } });
        this.calculateCurrentVersion();
      },
      err => console.error('Failed when retrieve versions.json from AWS', err));

  }

  private calculateCurrentVersion() {
    const versionUrl = window.location.pathname;
    this.selectedVersion = versionUrl.split('/')[3] !== '' ? versionUrl.split('/')[3] : this.versions.find(item2Find => item2Find.current === true).label;
  }


  selectVersion(value) {
    window.location.href = this.versions.find((v) => v.label === value).url;
  }

  ngOnDestroy(): void {
    if (this.suscription !== null) {
      this.suscription.unsubscribe();
    }
  }
}
