import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "any",
})
export class BackgroundProviderService {
  $changeColor = new Subject();

  constructor() {}

  changeBackgroundColor(color) {
    this.$changeColor.next(color);
  }
}
