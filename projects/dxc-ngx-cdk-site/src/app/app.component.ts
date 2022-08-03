import { Component, Inject } from "@angular/core";
import { ThemeService } from "@dxc-technology/halstack-angular";
import { customTheme } from "../assets/styles/themesProperties";
import { HttpClient } from "@angular/common/http";
import portal from "../assets/portal.json";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "DXC Angular Components";
  headerPadding = { left: "medium", right: "medium" };
  versions: Array<any> = [];
  selectedVersion;
  suscription;
  $sideNav = new BehaviorSubject({ hasSideNav: false, page: "" });

  constructor(
    @Inject("ThemeService") private themeService: ThemeService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.themeService.registerTheme(customTheme);
    this.router.events.subscribe((event: any) => {
      if (event?.url !== null && event?.url !== undefined) {
        event?.url.indexOf("/components") >= 0
          ? this.$sideNav.next({ hasSideNav: true, page: "components" })
          : event?.url.indexOf("/theme-builder") >= 0
          ? this.$sideNav.next({ hasSideNav: true, page: "theme-builder" })
          : this.$sideNav.next({ hasSideNav: false, page: "" });
      }
    });

    this.suscription = this.http.get(portal.url).subscribe(
      (resp: Array<any>) => {
        this.versions = resp.map((item) => {
          return {
            label: `${item.versionNumber}`,
            value: `${item.versionNumber}`,
            url: item.versionURL,
            current: item.current,
          };
        });
        this.calculateCurrentVersion();
      },
      (err) => console.error("Failed when retrieve versions.json from AWS", err)
    );
  }

  private calculateCurrentVersion() {
    const versionUrl = window.location.pathname;
    this.selectedVersion =
      versionUrl.split("/")[3] !== ""
        ? versionUrl.split("/")[3]
        : this.versions.find((item2Find) => item2Find.current === true).label;
  }

  selectVersion(value) {
    console.log("here: " + value);
    window.location.href = this.versions.find(
      (v) => v.label === value.value
    ).url;
  }

  isArrowVisible = (page: string) => (page === "components" ? false : true);

  ngOnDestroy(): void {
    if (this.suscription !== null) {
      this.suscription.unsubscribe();
    }
  }
}
