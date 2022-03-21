import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "sb-example-container",
  templateUrl: "./example-container.component.html",
  styleUrls: ["./example-container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleContainerComponent implements OnInit {
  @HostBinding("class") className;

  @Input()
  pseudoState: string;

  @Input()
  expanded: string;

  defaultInputs = new BehaviorSubject<any>({
    expanded: false,
  });

  constructor() {}

  ngOnInit(): void {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});

    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      .example-container {
        margin: 15px;
        height: ${inputs.expanded && "100vh"};
      }
    `;
  }
}
