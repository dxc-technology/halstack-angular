import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "boldOptions" })
export class BoldOptionsPipe implements PipeTransform {
  public transform(option: string, actualValue: string) {
    let boldString = option.slice(0, actualValue.length);
    return option.replace(boldString, "<b>" + boldString + "</b>");
  }
}
