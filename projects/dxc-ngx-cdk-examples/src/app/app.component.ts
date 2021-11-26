import { Component, Inject } from '@angular/core';
import { Components } from './components';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '@dxc-technology/halstack-angular';

ThemeService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components: Array<any>;
  constructor(private http: HttpClient, @Inject('ThemeService') private themeService: ThemeService) {
    this.components = Components;
    //this.themeService.registerTheme({button: {baseColor:"#000000"}});
  }

  ngOnInit(): void {

  }

  title = 'dxc-angular-cdk';

  checked = true;

  birthday = new Date(1992, 11, 5);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  // Prevent Saturday and Sunday from being selected.
  filter(d: Date): boolean {
    return d.getDay() !== 0 && d.getDay() !== 6;
  }

  isRequired() {
    return true;
  }

}
