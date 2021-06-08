import { MappingStrategy } from "./mappingStrategy";

export class AdvancedThemeBindingStrategy implements MappingStrategy {

  constructor() {}

  bindProperties(advancedTheme: any, tokens: any) {
    const allTokensCopy = JSON.parse(JSON.stringify(tokens));
    Object.keys(allTokensCopy).map( component => {
      if (advancedTheme[component]) {
        Object.keys(advancedTheme[component]).map(objectKey => {
          if (advancedTheme[component][objectKey]) {
            allTokensCopy[component][objectKey] = advancedTheme[component][objectKey];
          }
        });
      }
    });
    return allTokensCopy;
  }
}
