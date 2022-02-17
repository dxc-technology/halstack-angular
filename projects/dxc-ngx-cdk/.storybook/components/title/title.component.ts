import {
  Component,
  HostBinding,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "sb-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"],
})
export class TitleComponent implements OnInit {
  @HostBinding("class") className;

  @Input()
  title: string;

  @Input()
  theme: string;

  @Input()
  level: number;

  defaultInputs = new BehaviorSubject<any>({
    level: 1,
    theme: "light",
  });

  constructor() {}

  ngOnInit(): void {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (this.level == null) {
      this.level = 1;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.level == null) {
      this.level = 1;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      h1,
      h2,
      h3,
      h4 {
        font-family: Open Sans, sans-serif;
        color: ${inputs.theme === "dark" ? "#FFFFFF" : "#000000"};
      }
    `;
  }
}
