import { Component, Inject } from "@angular/core";
import { ThemeService } from "@dxc-technology/halstack-angular";
import { customTheme } from '../assets/styles/themesProperties';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-dxc-site";
  headerPadding = { left: "medium", right: "medium" };

  selectedVersion = 1;

  versions = [
    {
      value: 1,
      label: "1"
    },
    {
      value: 2,
      label: "0"
    },
    {
      value: 3,
      label: "next"
    }
  ];

  constructor(
    @Inject("ThemeService") private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.registerTheme(customTheme);
  }

  selectVersion(value) {
    this.selectedVersion = value;
    console.log("Uncontrolled change: " + value);
  }
}
