import { Component, Inject } from "@angular/core";
import { ThemeService } from "@diaas/dxc-ngx-cdk";
import { customTheme } from '../assets/styles/themesProperties';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-dxc-site";
  headerPadding = { left: "medium", right: "small" };

  constructor(
    @Inject("ThemeService") private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.registerTheme(customTheme);
  }
}
